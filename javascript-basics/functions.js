function letterFinder (word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log ("found the", match, "at", i)
        } else {
            console.log("---no match found at", i)
        }
    }
}

letterFinder ("test", "t")