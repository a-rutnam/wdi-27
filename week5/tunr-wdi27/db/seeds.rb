
Song.destroy_all

s1 = Song.create title: 'Achy Breaky Heart'
s2 = Song.create title: 'Have a Safe Trip, Dear'
s3 = Song.create title: 'Burn The Witch'
s4 = Song.create title: 'Identikit'
s5 = Song.create title: 'Rollerblade Success Story'
s6 = Song.create title: 'No One Gives a Hoot About Faux-Ass Nonsense'
s7 = Song.create title: 'Sail To The Moon'

puts "Created #{ Song.all.length } songs."

Album.destroy_all

a1 = Album.create title: 'Some Gave All', year: '1992'
a2 = Album.create title: 'Engine Takes To The Water', year: '1998'
a3 = Album.create title: 'A Moon-Shaped Pool', year: '2015'
a4 = Album.create title: 'II', year: '1992'
a5 = Album.create title: 'Hail To The Thief', year: '1999'

puts "Created #{ Album.all.length } albums."

a1.songs << s1        # set the album_id for s1 to be a1.id
a2.songs << s2        # set the album_id for s2 to be a2.id
a3.songs << s3 << s4  # set the album_id for s3 AND for s4 to be a3.id
a4.songs << s6        # etc...
a5.songs << s7


Artist.destroy_all

r1 = Artist.create name: 'Billy Ray Cyrus'
r2 = Artist.create name: 'June of 44'
r3 = Artist.create name: 'Radiohead'
r4 = Artist.create name: 'Don Caballero'

puts "Created #{ Artist.all.length } artists."

# set up the songs which belong to each artist
r1.songs << s1  # sets the artist_id field of s1 to be r1.id
r2.songs << s2
r3.songs << s3 << s4 << s7
r4.songs << s5 << s6


Genre.destroy_all

g1 = Genre.create name: 'Nautical Rock'
g2 = Genre.create name: 'Math Rock'
g3 = Genre.create name: 'Paranoid Art-Rock'
g4 = Genre.create name: 'Instrumental'
g5 = Genre.create name: 'IDM'
g6 = Genre.create name: 'Country'
g7 = Genre.create name: 'Sadcore'

puts "Created #{ Genre.all.length } genres."

# Set genres that apply to each song
s1.genres << g6
s2.genres << g1 << g2
s3.genres << g3 << g7
s4.genres << g3 << g7 << g5
s5.genres << g4 << g2
s6.genres << g4 << g3
s7.genres << g3 << g7 << g5

Mixtape.destroy_all

m1 = Mixtape.create title: 'Driving Songs'
m2 = Mixtape.create title: 'Make-out Music'
m3 = Mixtape.create title: 'Code Jams'

puts "Created #{ Mixtape.all.length } mixtapes."

m1.songs << s1 << s2 << s3 << s4 << s5 << s6 << s7
m2.songs << s2 << s4 << s6
m3.songs << s7 << s1 << s2


User.destroy_all

u1 = User.create email: 'grant@ga.co', username: 'grrrrrant', password: 'chicken'
u2 = User.create email: 'luke@ga.co', username: 'textchimp', password: 'chicken'
u3 = User.create email: 'mikaela@ga.co', username: 'mikkimoo', password: 'chicken'

puts "Created #{ User.all.length } users."

u1.mixtapes << m1    # sets m1.user_id to be u1.id
u2.mixtapes << m2
u3.mixtapes << m3
