# Generate YouTube IDs:
  # Challenge that I made up to create random YouTube style IDs
  # The results aren't truly random, it's just an exercise!

  # Write a method that takes two arguments:
    # length of the generated id, and total number of ids to generate
    # ex method: generate_ids(id_length,total_ids)
  # Generate unique alphanumeric ids based on the method's arguments
  # Don't duplicate ids
  # Return hash of unique ids

  def generate_ids(id_length,total_ids)
    ids = {}
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    i = 1
    while ids.length < total_ids do
      id = ''
      id_length.times do
        random_char = chars[rand(chars.length)]
        id += random_char
      end
      if ids.has_value?(id) == false
        ids[i] = id
        i += 1
      end
    end
    ids
  end


youtube_ids = generate_ids(10,5)

puts youtube_ids