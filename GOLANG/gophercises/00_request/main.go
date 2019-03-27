package main

import (
  "encoding/csv"
  "encoding/json"
  "io/ioutil"
  "log"
  "net/http"
  "os"
)

const Api = "replace me"

type S struct {
  Took     int  `json:"took"`
  TimedOut bool `json:"timed_out"`
  Shards   struct {
    Total      int `json:"total"`
    Successful int `json:"successful"`
    Failed     int `json:"failed"`
  } `json:"_shards"`
  Hits struct {
    Total    int     `json:"total"`
    MaxScore float64 `json:"max_score"`
    Hits     []struct {
      Index  string  `json:"_index"`
      Type   string  `json:"_type"`
      ID     string  `json:"_id"`
      Score  float64 `json:"_score"`
      Source struct {
        ID       string `json:"id"`
        Headline string `json:"headline"`
      } `json:"_source,omitempty"`
    } `json:"hits"`
  } `json:"hits"`
}

func main() {
  req, err := http.NewRequest(http.MethodGet, Api, nil)
  file, err := os.Create("result.csv")

  if err != nil {
    log.Fatal(err)
    return
  }

  writer := csv.NewWriter(file)
  defer writer.Flush()

  client := http.Client{}

  res, err := client.Do(req)

  if err != nil {
    log.Fatal(err)
    return
  }

  body, readErr := ioutil.ReadAll(res.Body)

  if readErr != nil {
    log.Fatal(readErr)
  }

  var t S
  err = json.Unmarshal(body, &t)
  err = writer.Write([]string{"screenpanel id", "platform", "headline"})
  for _, sp := range t.Hits.Hits {
    err = writer.Write([]string{sp.ID, sp.Type, sp.Source.Headline})
  }
}
