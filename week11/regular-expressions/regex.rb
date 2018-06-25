require 'pry'

ARGF.each do |line|
  puts line if line =~ /newt/
end
