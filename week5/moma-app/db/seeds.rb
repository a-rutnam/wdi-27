
# Clear the DB
Artist.destroy_all

puts "Creating artists..."

a1 = Artist.create name: 'Frantisek Kupka', nationality: 'Czech', dob: '1871/09/23', period: '20th Century', roundness: 'mild', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg'

a2 = Artist.create name: 'Lee Krasner', nationality: 'USA', dob: '1908/10/27', period: '20th Century', roundness: 'disappointing', image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg'

a3 = Artist.create name: 'Max Ernst', nationality: 'German', dob: '1891/04/02', period: '20th Centurt', roundness: 'average', image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg'

puts "Created #{ Artist.all.length } artists:"
puts Artist.pluck(:name).join(', ')

puts "Creating works..."

Work.destroy_all

# kupka
Work.create title: 'Movement', year: '1946', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tresbohemes.com/wp-content/uploads/2016/04/Kupka-Movement.jpg', artist_id: a1.id # long way to associate

# kranser
Work.create title: 'Gothic Landscape', year: '1961', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tate.org.uk/art/images/work/T/T03/T03291_10.jpg', artist: a2

# kranser
Work.create title: 'Working Model', year: '1957', medium: 'bronze sculpture', style: 'modernism', image: 'http://www.tate.org.uk/art/images/work/T/T00/T00390_10.jpg', artist: a2

# ernst
Work.create title: 'City with Animals', year: '1930', medium: 'oil on wood', style: 'surrealism/cubism', image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870', artist: a3

# ernst 2
Work.create title: 'Die Versuchung des heiligen Antonius', year: '1945', medium: 'oil on canvas', style: 'surrealism', image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg', artist: a3

puts "Created #{Work.all.length} works:"
puts Work.pluck(:title).join(', ')
