import json

# Cross references two lists of words
# First list contains words and frequency counts, but has a lot of random words, names, places etc.
# Second list contains a "safer" list of words but no frequency counts

# This script finds the matching words between both lists and outputs a third list common words + frequency counts

words = {}
selected_words = {}
list_1 = 'words-1.txt'
list_2 = 'words-2.txt'
word_length = 6
words_friends_list = []

# Not an exhaustive list, just for illustration purposes:
bad_words = [
  "biatch",
  "bollok",
  "booobs",
  "buceta",
  "xrated"
]

# Parse list for 6 letter words with min frequency score:
with open(list_1) as file:
  line = file.readline()
  line_count = 0
  min_frequency = 99999

  for line in file:
    line = line.strip().split('\t')
    word = line[0]
    frequency = int(line[1])
    filter_length = len(word) == word_length
    filter_unique = word not in words
    filter_frequency = frequency > min_frequency
    filter_vulgar = word not in bad_words

    if filter_length and filter_unique and filter_frequency and filter_vulgar:
      words[word] = frequency
    line_count += 1

# Read txt file and select all 6 letter words:
with open(list_2) as file:
  line = file.readline()
  line_count = 0
  for line in file:
    word = line.strip()
    # Filter words by:
    filter_length = len(word) == word_length

    if filter_length and word in words:
      selected_words[word] = words[word]
    line_count += 1

print(len(selected_words))

# Write words array to JSON file
output = 'list-output.json'
with open(output,'w') as fp:
  json.dump(selected_words,fp)