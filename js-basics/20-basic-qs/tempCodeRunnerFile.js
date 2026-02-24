if(occurence[word]){
        console.log(word);
        occurence[word]++;   // ** not occurence[word] += 1; **
    }

    else{
        occurence[word] = 1;
    }