package main

import (
  "bufio"
  "encoding/csv"
  "fmt"
  "io"
  "log"
  "os"
)

type QA struct {
  Question string
  Answer string
}

// Read Questions and Answer from CSV file.
// return answers
func getQA() []QA {
  var qas []QA
  problems, err := os.Open("problems.csv")

  if err != nil {
    log.Fatal(err)
  }

  problemsReader := csv.NewReader(bufio.NewReader(problems))

  for {
    line, err := problemsReader.Read()

    if err == io.EOF {
      log.Print("EOF")
      break
    } else if err != nil {
      log.Fatal(err)
    }

    qas = append(qas, QA{
      Question: line[0],
      Answer: line[1],
    })
  }

  return qas
}

func main() {
  score := 0
  var problems = getQA()
  scanner := bufio.NewScanner(os.Stdin)

  for _, problem := range problems {
    fmt.Println("what is result of", problem.Question, "?")
    scanner.Scan()
    answer := scanner.Text()
    fmt.Println("your answer is", answer)

    if answer == problem.Answer {
      score++
    }
  }

  fmt.Println("Your score is", score, "/", len(problems))
}
