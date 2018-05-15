
puts "Populating the solar system..."

Planet.destroy_all

Planet.create name: "Earth", orbit: 1,   moons: 1, mass: 1, diameter: 1, temperature: 1
Planet.create name: "Mars",  orbit: 687, moons: 2, mass: 2, diameter: 0.2, temperature: 0.2
Planet.create name: "Venus",  orbit: 0.7, moons: 2, mass: 2, diameter: 0.1, temperature: 5
Planet.create name: "Jupiter", orbit: 800, moons: 8, mass: 1000, diameter: 500, temperature: 0.1

print "Created #{ Planet.all.length }: "
puts Planet.all.pluck(:name).join(', ')
