import pdb
import json

words = []

with open('common-words-sample.txt') as fp:
  line = fp.readline()
  line_count = 0
  while line_count < 20:
    line = fp.readline().strip().split('\t')
    word = { "word": line[0], "frequency": int(line[1]) }
    words.append(word)
    line_count += 1

with open('sample-words-parsed.json','w') as fp:
  json.dump(words,fp)