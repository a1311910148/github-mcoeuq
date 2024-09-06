package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
}

func main() {
    http.HandleFunc("/", handler)

    fmt.Println("Listening on port 80...")
    err := http.ListenAndServe(":80", nil)
    if err != nil {
        fmt.Println("Error starting server:", err)
    }
}
