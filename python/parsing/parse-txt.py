import pdb
import json

words = []

# Read txt file and select all 6 letter words
with open('common-words-sample.txt') as fp:
  line = fp.readline()
  word_length = 6
  count = 0
  for line in fp:
    line = line.strip().split('\t')
    word = line[0]
    if len(word) == word_length:
      item = { "word": word, "frequency": int(line[1]) }
      words.append(item)
    count += 1

# Write words array to JSON file
with open('sample-words-parsed.json','w') as fp:
  json.dump(words,fp)

print(len(words))