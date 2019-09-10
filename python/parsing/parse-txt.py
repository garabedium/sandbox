import pdb
import json

words = []

with open('common-words-sample.txt') as fp:
  line = fp.readline()
  count = 0
  for line in fp:
    line = line.strip().split('\t')
    word = line[0]
    if len(word) == 6:
      item = { "word": word, "frequency": int(line[1]) }
      words.append(item)
    count += 1

with open('sample-words-parsed.json','w') as fp:
  json.dump(words,fp)

print(len(words))