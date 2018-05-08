# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:

days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }



# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# Move Sunday around using an extra variable
moving_day = days.pop
days.unshift( moving_day )

# One line but less readable:
days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }
days.unshift( days.pop )

# RTFM:
days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }
days.rotate!( -1 )


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

week_days = days[0..4]
weekend_days = days[5..6]
week_parts = [week_days, weekend_days]

# One-liner:
week_parts = [ days[0..4], days[5..6] ]

# 4. Remove either the weekdays or the weekends
# Your choice...
#
week_parts.pop  # remove the second element, i.e. the weekends sub-array

# 5. Sort the remaining days alphabetically

sorted_days = week_parts.first.sort

require 'pry'; binding.pry
p days
