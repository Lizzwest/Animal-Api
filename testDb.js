const breed = new breed({breedName: "Golden Retriever", goodWithKids: true})
breed.species.push({speciesName: "Canine", isDomesticated: true})
breed.animalClass.push({className: "Mammal", phylum: "Chordate" })
breed.save()