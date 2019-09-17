import pdb
import json
import time

start_time = time.clock()

words = {}

# Read txt file and select all 6 letter words:
with open('common-words-sample.txt') as fp:
  line = fp.readline()
  word_length = 6
  count = 0
  for line in fp:
    line = line.strip().split('\t')
    word = line[0]
    frequency = int(line[1])
    # Filter words by:
    filter_length = len(word) == word_length
    filter_unique = word not in words

    if filter_length and filter_unique:
      words[word] = frequency
    count += 1

# Write words array to JSON file
with open('sample-words-parsed.json','w') as fp:
  json.dump(words,fp)

print(len(words))
print time.clock() - start_time, "seconds"