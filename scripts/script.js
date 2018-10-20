let app = angular.module('spaceApp', []);

let randomDay = Math.floor((Math.random() * 30) + 1);
let randomMonth = Math.floor((Math.random() * 9) + 1);

app.controller('spaceController', function($scope, $http, $window) {
  $http.get("https://api.nasa.gov/planetary/apod?api_key=K5L9TQ8xYzSvXS05LOu6H2GqzZ4BaDniA1amyYUP&date=2018-0" + randomMonth + "-" + randomDay)
  .then(function(response) {
    $scope.contents = response.data;
    $scope.imageURL = $scope.contents.url;

    if($scope.imageURL.includes("youtube")) {
      $window.location.reload();
    }
    $scope.date = $scope.contents.date;
    $scope.explanation = $scope.contents.explanation;
  });
});

document.getElementById("backgroundimage").onload = makeVisible;

function makeVisible() {
  $("body").css("visibility", "visible");
}

//quotes
let quotes =

[
  {
    "body":"\"Man must rise above the Earth-to the top of the atmosphere and beyond-for only thus will he fully understand the world in which he lives.\"",
    "author":"- Socrates, Philosopher"
  },
  {
    "body":"\"Astronomy compels the soul to look upward, and leads us from this world to another.\"",
    "author":"- Plato, Philosopher"
  },
  {
    "body":"\"The purpose of life is the investigation of the Sun, the Moon, and the heavens.\"",
    "author":"- Anaxagoras, Philosopher"
  },
  {
    "body":"\"Mortal as I am, I know that I am born for a day, but when I follow the serried multitude of the stars in their circular course, my feet no longer touch the earth; I ascend to Zeus himself to feast me on ambrosia, the food of the gods.\"",
    "author":"- Ptolemy, Astronomer"
  },
  {
    "body":"\"The strongest affection and utmost zeal should, I think, promote the studies concerned with the most beautiful objects. This is the discipline that deals with the universe's divine revolutions, the stars' motions, sizes, distances, risings and settings . . . for what is more beautiful than heaven?\"",
    "author":"- Nicolaus Copernicus, Astronomer"
  },
  {
    "body":"\"Astronomy is useful because it raises us above ourselves; it is useful because it is grand; …. It shows us how small is man's body, how great his mind, since his intelligence can embrace the whole of this dazzling immensity, where his body is only an obscure point, and enjoy its silent harmony.\"",
    "author":"- Henri Poincaré, Physicist"
  },
  {
    "body":"\"Do not look at stars as bright spots only. Try to take in the vastness of the universe.\"",
    "author":"- Maria Mitchell, Astronomer"
  },
  {
    "body":"\"I am just learning to notice the different colors of the stars, and already begin to have a new enjoyment.\"",
    "author":"- Maria Mitchell, Astronomer"
  },
  {
    "body":"\"Astronomy taught us our insignificance in Nature.\"",
    "author":"- Ralph Waldo Emerson, Poet"
  },
  {
    "body":"\"Astronomers, like burglars and jazz musicians, operate best at night.\"",
    "author":"- Miles Kington, Journalist"
  },
  {
    "body":"\"For my confirmation, I didn't get a watch and my first pair of long pants, like most Lutheran boys. I got a telescope. My mother thought it would make the best gift.\"",
    "author":"- Wernher von Braun, Rocket Engineer"
  },
  {
    "body":"\"Equipped with his five senses, man explores the universe around him and calls the adventure Science.\"",
    "author":"- Edwin Hubble, Astronomer"
  },
  {
    "body":"\"I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.\"",
    "author":"- Arthur C. Clarke, Science Fiction Writer"
  },
  {
    "body":"\"The cosmos is all that is or ever was or ever will be. Our feeblest contemplations of the Cosmos stir us-there is a tingling in the spine, a catch in the voice, a faint sensation, as if a distant memory, or falling from a height. We know we are approaching the greatest of mysteries.\"",
    "author":"- Carl Sagan, Astronomer"
  },
  {
    "body":"\"If it’s a new planet, sign me up. I’m tired of driving around the block, boldly going where hundreds have gone before in orbit around earth-give me a place to go and I’ll go.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"To confine our attention to terrestrial matters would be to limit the human spirit.\"",
    "author":"- Stephen Hawking, Astrophysicist"
  },
  {
    "body":"\"Space isn't remote at all. It's only an hour's drive away, if your car could go straight upwards.\"",
    "author":"- Sir Fred Hoyle, Astronomer"
  },
  {
    "body":"\"Space is for everybody. It's not just for a few people in science or math, or for a select group of astronauts. That's our new frontier out there, and it's everybody's business to know about space.\"",
    "author":"- Christa McAuliffe, Teacher and Challenger Astronaut"
  },
  {
    "body":"\"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"The unleashed power of the atom has changed everything save our modes of thinking and we thus drift toward unparalleled catastrophe.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"Reality is merely an illusion, albeit a very persistent one.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"Most of the fundamental ideas of science are essentially simple, and may, as a rule, be expressed in a language comprehensible to everyone.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"Black holes are where God divided by zero.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"The process of scientific discovery is, in effect, a continual flight from wonder.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"The difference between stupidity and genius is that genius has its limits.\"",
    "author":"- Albert Einstein, Astrophysicist"
  },
  {
    "body":"\"Scientists willing to risk their reputations on higher dimensions soon found themselves ridiculed by the scientific community. Higher-dimensional space became the last refuge for mystics, cranks, and charlatans.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"By 2100, our destiny is to become like the gods we once worshiped and feared. But our tools will not be magic wands and potions but the science of computers, nanotechnology, artificial intelligence, biotechnology, and most of all, the quantum theory.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"Physicists are made of atoms. A physicist is an attempt by an atom to understand itself.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"Some people seek meaning in life through personal gain, through personal relationship, or through personal experiences. However, it seems to me that being blessed with the intellect to divine the ultimate secrets of nature gives meaning enough to life.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"We are not at the end but at the beginning of a new physics. But whatever we find, there will always be new horizons continually awaiting us.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"It is often stated that of all the theories proposed in this century, the silliest is quantum theory. In fact, some say that the only thing that quantum theory has going for it is that it is unquestionably correct.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"The strength and weakness of physicists is that we believe in what we can measure. And if we can't measure it, then we say it probably doesn't exist. And that closes us off to an enormous amount of phenomena that we may not be able to measure because they only happened once. For example, the Big Bang.\"",
    "author":"- Michio Kaku, Astrophysicist"
  },
  {
    "body":"\"I look up at the night sky, and I know that, yes, we are part of this Universe, we are in this Universe, but perhaps more important than both of those facts is that the Universe is in us. When I reflect on that fact, I look up-many people feel small, because they’re small and the Universe is big, but I feel big, because my atoms came from those stars.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"The remarkable feature of physical laws is that they apply everywhere, whether or not you choose to believe in them. After the laws of physics, everything else is opinion.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"If the Sun exploded, we wouldn’t know about it for 8 minutes and 20 seconds. Light and gravity take that long to reach us. Then we would vaporize.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"Not only are we in the universe, the universe is in us. I don’t know of any deeper spiritual feeling than what that brings upon me.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"I love the smell of the universe in the morning.\"",
    "author":"- Neil deGrasse Tyson, Astrophysicist"
  },
  {
    "body":"\"God has no intention of setting a limit to the efforts of man to conquer space.\"",
    "author":"- Pope Pius XII"
  },
  {
    "body":"\"To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature-could one dream of anything more?\"",
    "author":"- Yuri Gagarin, Russian Cosmonaut"
  },
  {
    "body":"\"When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!\"",
    "author":"- Yuri Gagarin, Russian Cosmonaut"
  },
  {
    "body":"\"It [the rocket] will free man from his remaining chains, the chains of gravity which still tie him to this planet. It will open to him the gates of heaven.\"",
    "author":"- Wernher von Braun, Rocket Engineer"
  },
  {
    "body":"\"Our two greatest problems are gravity and paperwork. We can lick gravity, but sometimes the paperwork is overwhelming.\"",
    "author":"- Wernher von Braun, Rocket Engineer"
  },
  {
    "body":"\"Don't tell me that man doesn't belong out there. Man belongs wherever he wants to go - and he'll do plenty well when he gets there.\"",
    "author":"- Wernher von Braun, Rocket Engineer"
  },
  {
    "body":"\"I don't think the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist. We will reach out to the stars.\"",
    "author":"- Stephen Hawking, Astrophysicist"
  },
  {
    "body":"\"Man is an artifact designed for space travel. He is not designed to remain in his present biologic state any more than a tadpole is designed to remain a tadpole.\"",
    "author":"- William Burroughs, Author"
  },
  {
    "body":"\"Space travel is life-enhancing, and anything that's life-enhancing is worth doing. It makes you want to live forever.\"",
    "author":"- Ray Bradbury, Science Fiction Author"
  },
  {
    "body":"\"Life, forever dying to be born afresh, forever young and eager, will presently stand upon this Earth as upon a footstool, and stretch out its realm amidst the stars.\"",
    "author":"- H. G. Wells, Science Fiction Author"
  },
  {
    "body":"\"A sense of the unknown has always lured mankind and the greatest of the unknowns of today is outer space. The terrors, the joys and the sense of accomplishment are epitomized in the space program.\"",
    "author":"- William Shatner, Actor"
  },
  {
    "body":"\"I don't know what you could say about a day in which you have seen four beautiful sunsets.\"",
    "author":"- John Glenn, Astronaut"
  },
  {
    "body":"\"Anyone who sits on top of the largest hydrogen-oxygen fueled system in the world; knowing they're going to light the bottom-and doesn't get a little worried-does not fully understand the situation.\"",
    "author":"- John Young, Astronaut"
  },
  {
    "body":"\"Through you, we feel as giants, once again.\"",
    "author":"- President Ronald Reagan, to the Crew of the First Shuttle Mission"
  },
  {
    "body":"\"I remember growing up thinking that astronauts and their job was the coolest thing you could possibly do... But I absolutely couldn't identify with the people who were astronauts. I thought they were movie stars.\"",
    "author":"- David M. Brown, Space Shuttle Astronaut"
  },
  {
    "body":"\"Let's face it, space is a risky business. I always considered every launch a barely controlled explosion.\"",
    "author":"- Aaron Cohen, NASA Administrator"
  },
  {
    "body":"\"Every generation has the obligation to free men's minds for a look at new worlds . . . to look out from a higher plateau than the last generation.\"",
    "author":"- Ellison S. Onizuka, Challenger Astronaut"
  },
  {
    "body":"\"If offered a seat on a rocket ship, don't ask what seat. Just get on.\"",
    "author":"- Christa McAuliffe, Teacher and Challenger Astronaut"
  },
  {
    "body":"\"I cannot join the space program and restart my life as an astronaut, but this opportunity to connect my abilities as an educator with my interests in history and space is a unique opportunity to fulfill my early fantasies. I watched the space program being born, and I would like to participate.\"",
    "author":"- Christa McAuliffe, Teacher and Challenger Astronaut"
  },
  {
    "body":"\"This is a day we have managed to avoid for a quarter of a century. We've talked about it before and speculated about it, and it finally has occurred. We hoped we could push this day back forever.\"",
    "author":"- Astronaut John Glenn, Regarding the Challenger Accident"
  },
  {
    "body":"\"All of a sudden, space isn't friendly. All of a sudden, it's a place where people can die. . . . Many more people are going to die. But we can't explore space if the requirement is that there be no casualties; we can't do anything if the requirement is that there be no casualties.\"",
    "author":"- Isaac Asimov, Science Fiction Writer"
  },
  {
    "body":"\"The thing I'll remember most about the flight is that it was fun. In fact, I'm sure it was the most fun that I'll ever have in my life.\"",
    "author":"- Sally K. Ride, First Woman to Orbit Earth on the Space Shuttle"
  },
  {
    "body":"\"Of course risk is part of spaceflight. We accept some of that to achieve greater goals in exploration and find out more about ourselves and the universe.\"",
    "author":"- Lisa Nowak, Space Shuttle Astronaut"
  },
  {
    "body":"\"Some say that we should stop exploring space, that the cost in human lives is too great. But Columbia's crew would not have wanted that. We are a curious species, always wanting to know what is over the next hill, around the next corner, on the next island. And we have been that way for thousands of years.\"",
    "author":"- Stuart Atkinson, Writer"
  },
  {
    "body":"\"Let’s light this fire one more time, Mike, and witness this great nation at its best.\"",
    "author":"- Christopher Ferguson, Commander of the Final Space Shuttle Mission"
  },
  {
    "body":"\"The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.\"",
    "author":"- Aleksei Leonov, Russian Cosmonaut"
  },
  {
    "body":"\"To see the earth as it truly is, small and blue and beautiful in that eternal silence where it floats, is to see ourselves a riders on the earth together, brothers on that bright loveliness in the eternal cold-brothers who know now they are truly brothers.\"",
    "author":"- Archibald MacLeish, American Poet"
  },
  {
    "body":"\"As we begin to comprehend that the earth itself is a kind of manned spaceship hurtling through the infinity of space-it will seem increasingly absurd that we have not better organized the life of the human family.\"",
    "author":"- Hubert H. Humphrey, Vice President of the United States"
  },
  {
    "body":"\"It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.\"",
    "author":"- Neil Armstrong, Apollo Astronaut"
  },
  {
    "body":"\"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.\"",
    "author":"- James B. Irwin, Apollo Astronaut"
  },
  {
    "body":"\"The view of the Earth from the Moon fascinated me -- a small disk, 240,000 miles away. . . . Raging nationalistic interests, famines, wars, pestilence don't show from that distance.\"",
    "author":"- Frank Borman, Commander of Apollo 8"
  },
  {
    "body":"\"I think the one overwhelming emotion that we had was when we saw the earth rising in the distance over the lunar landscape . . . . It makes us realize that we all do exist on one small globe. For from 230,000 miles away it really is a small planet.\"",
    "author":"- Frank Borman, Commander of Apollo 8"
  },
  {
    "body":"\"The world itself looks cleaner and so much more beautiful. Maybe we can make it that way-the way God intended it to be-by giving everybody that new perspective from out in space.\"",
    "author":"- Roger B Chaffee, NASA Astronaut"
  },
  {
    "body":"\"Oddly enough the overriding sensation I got looking at the earth was, my god that little thing is so fragile out there.\"",
    "author":"- Mike Collins, Apollo 11 Astronaut"
  },
  {
    "body":"\"For the first time in my life I saw the horizon as a curved line. It was accentuated by a thin seam of dark blue light-our atmosphere. Obviously this was not the ocean of air I had been told it was so many times in my life. I was terrified by its fragile appearance.\"",
    "author":"- Ulf Merbold, ESA Astronaut"
  },
  {
    "body":"\"Suddenly, from behind the rim of the Moon, in long, slow-motion moments of immense majesty, there emerges a sparkling blue and white jewel, a light, delicate sky-blue sphere laced with slowly swirling veils of white, rising gradually like a small pearl in a thick sea of black mystery. It takes more than a moment to fully realize this is Earth . . . home.\"",
    "author":"- Edgar Mitchell, Apollo Astronaut"
  },
  {
    "body":"\"Now I know why I'm here. Not for a closer look at the moon, but to look back at our home, the Earth.\"",
    "author":"- Alfred Worden, Apollo Astronaut"
  },
  {
    "body":"\"Looking outward to the blackness of space, sprinkled with the glory of a universe of lights, I saw majesty-but no welcome. Below was a welcoming planet. There, contained in the thin, moving, incredibly fragile shell of the biosphere is everything that is dear to you, all the human drama and comedy. That's where life is; that's were all the good stuff is.\"",
    "author":"- Loren Acton, Physicist and Space Shuttle Astronaut"
  },
  {
    "body":"\"It’s beyond imagination until you actually get up and see it and experience it and feel it.\"",
    "author":"- Willie McCool, Space Shuttle Astronaut"
  },
  {
    "body":"\"To fly in space is to see the reality of Earth, alone. The experience changed my life and my attitude toward life itself. I am one of the lucky ones.\"",
    "author":"- Roberta Bondar, Neurologist and Space Shuttle Astronaut"
  },
  {
    "body":"\"The scenery was very beautiful. But I did not see the Great Wall.\"",
    "author":"- Yang Liwei, China's First Astronaut"
  },
  {
    "body":"\"We came all this way to explore the moon, and the most important thing is that we discovered the earth.\"",
    "author":"- William Anders, Apollo Astronaut"
  },
  {
    "body":"\"The earth is simply too small and fragile a basket for the human race to keep all its eggs in.\"",
    "author":"- Robert A. Heinlein, Science Fiction Author"
  },
  {
    "body":"\"There is perhaps no better a demonstration of the folly of human conceits than this distant image of our tiny world.\"",
    "author":"- Carl Sagan, Astronomer"
  },
  {
    "body":"\"Look again at that dot. That's here, that's home, that's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.\"",
    "author":"- Carl Sagan, Astronomer"
  },
  {
    "body":"\"The Moon is the first milestone on the road to the stars.\"",
    "author":"- Arthur C. Clarke, Science Fiction Writer"
  },
  {
    "body":"\"Ten years ago the Moon was an inspiration to poets and an opportunity for lovers. Ten years from now it will be just another airport.\"",
    "author":"- Emmanuel G. Mesthene, Writer"
  },
  {
    "body":"\"If somebody had said before the flight, \"Are you going to get carried away looking at the earth from the moon?\" I would have say, \"No, no way.\" But yet when I first looked back at the earth, standing on the moon, I cried.\"",
    "author":"- Alan Shepard, Astronaut"
  },
  {
    "body":"\"Well, Frank, my thoughts are very similar. The vast loneliness up here at the moon is awe-inspiring, and it makes you realize what you have back there on earth. The earth from here is a grand oasis in the big vastness of space.\"",
    "author":"- Jim Lovell, live Apollo 8"
  },
  {
    "body":"\"As you pass from sunlight into darkness and back again every hour and a half, you become startlingly aware how artificial are thousands of boundaries we've created to separate and define.  And for the first time in your life you feel in your gut the precious unity of the Earth and all the living things it supports.\"",
    "author":"- Russell Schweikart, Apollo 9"
  },
  {
    "body":"\"That's one small step for [a] man; one giant leap for mankind.\"",
    "author":"- Neil A. Armstrong, Commander of Apollo 11"
  },
  {
    "body":"\"In my own view, the important achievement of Apollo was a demonstration that humanity is not forever chained to this planet, and our visions go rather further than that, and our opportunities are unlimited.\"",
    "author":"- Neil A. Armstrong, Commander of Apollo 11"
  },
  {
    "body":"\"It's different, but it's very pretty out here. I suppose they are going to make a big deal of all this.\"",
    "author":"- Neil A. Armstrong, Commander of Apollo 11"
  },
  {
    "body":"\"This has been far more than three men on a mission to the Moon; more still than the efforts of a government and industry team; more, even, than the efforts of one nation. We feel this stands as a symbol of the insatiable curiosity of all mankind to explore the unknown.\"",
    "author":"- Buzz Aldrin, Apollo 11"
  },
  {
    "body":"\"I don't believe any pair of people had been more removed physically from the rest of the world than we were.\"",
    "author":"- Buzz Aldrin, Apollo 11"
  },
  {
    "body":"\"We are gliding across the world in total silence, with absolute smoothness; a motion of stately grace which makes me feel godlike as I stand erect in my sideways chariot, cruising the night sky.\"",
    "author":"- Michael Collins, Apollo 11"
  },
  {
    "body":"\"I think a future flight should include a poet, a priest and a philosopher . . . we might get a much better idea of what we saw.\"",
    "author":"- Michael Collins, Apollo 11"
  },
  {
    "body":"\"When the eagle landed on the moon, I was speechless overwhelmed, like most of the world. Couldn't say a word. I think all I said was, \"Wow! Jeez!\" Not exactly immortal. Well, I was nothing if not human.\"",
    "author":"- Walter Cronkite, CBS News Anchor"
  },
  {
    "body":"\"Frequently on the lunar surface I said to myself, This is the Moon, that is the Earth. I'm really here, I'm really here!\"",
    "author":"- Alan Bean, Apollo 12"
  },
  {
    "body":"\"When I look at the moon I do not see a hostile, empty world. I see the radiant body where man has taken his first steps into a frontier that will never end.\"",
    "author":"- David Scott, Commander Apollo 15"
  },
  {
    "body":"\"As I stand out here in the wonders of the unknown at Hadley, I sort of realize there's a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.\"",
    "author":"- David Scott, Commander Apollo 15"
  },
  {
    "body":"\"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.\"",
    "author":"- James Irwin, Apollo 15"
  },
  {
    "body":"\"Neil and Buzz, I am talking to you by telephone from the Oval Office at the White House, and this certainly has to be the most historic telephone call ever made. . . . Because of what you have done, the heavens have become a part of man's world. As you talk to us from the Sea of Tranquility, it inspires us to redouble our efforts to bring peace and tranquility to Earth.\"",
    "author":"- President Richard M. Nixon"
  },
  {
    "body":"\"Here Men From Planet Earth First Set Foot Upon The Moon July 1969 A.D. We Came In Peace For All Mankind.\"",
    "author":"- Plaque left on the Moon by Apollo 11"
  },
  {
    "body":"\"The night is even more richly colored than the day. . . . If only one pays attention to it, one sees that certain stars are citron yellow, while others have a pink glow or a green, blue and forget-me-not brilliance. And without my expiating on this theme, it should be clear that putting little white dots on a blue-black surface is not enough.\"",
    "author":"- Vincent van Gogh, Painter"
  },
  {
    "body":"\"For my part I know nothing with any certainty but the sight of the stars makes me dream.\"",
    "author":"- Vincent Van Gogh, Painter"
  },
  {
    "body":"\"The Sun, with all those planets revolving around it and dependent upon it, can still ripen a bunch of grapes as if it had nothing else in the Universe to do.\"",
    "author":"- Galileo Galilei, Astronomer"
  },
  {
    "body":"\"The face of the sun is not without expression, but it tells us precious little of what is in its heart.\"",
    "author":"- Armin J. Deutsch, Astronomer and Science Fiction Writer"
  },
  {
    "body":"\"When I consider how, after sunset, the stars come out gradually in troops from behind the hills and woods, I confess that I could not have contrived a more curious and inspiring sight.\"",
    "author":"- Henry Thoreau, Poet"
  },
  {
    "body":"\"It is reasonable to hope that in the not too distant future we shall be competent to understand so simple a thing as a star.\"",
    "author":"- Arthur Eddington, Astrophysicist"
  },
  {
    "body":"\"The real friends of the space voyager are the stars. Their friendly, familiar patterns are constant companions, unchanging, out there.\"",
    "author":"- James Lovell, Apollo Astronaut"
  },
  {
    "body":"\"Though my soul may set in darkness, it will rise in perfect light; I have loved the stars too fondly to be fearful of the night.\"",
    "author":"- Sarah Williams, Poet"
  },
  {
    "body":"\"Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life. I thought of their unfathomable distance, and the slow inevitable drift of their movements out of the unknown past into the unknown future.\"",
    "author":"- H. G. Wells Science Fiction Writer"
  },
  {
    "body":"\"It is a pity, in an age of rockets and space telescopes, that so few people have a direct acquaintance with the stars. Learning the stars and following their nightly courses across the sky brings a deep satisfaction born of familiarity with something both ancient and ageless.\"",
    "author":"- Richard Berry, Writer"
  },
  {
    "body":"\"Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life. I thought of their unfathomable distance, and the slow inevitable drift of their movements out of the unknown past into the unknown future.\"",
    "author":"- H. G. Wells Science Fiction Writer"
  },
  {
    "body":"\"And as I looked at the star, I realised what millions of other people have realised when looking at stars. We’re tiny. We don’t matter. We’re here for a second and then gone the next. We’re a sneeze in the life of the universe.\"",
    "author":"- Danny Wallace, Writer"
  }
]

let randomIndex = Math.floor(Math.random() * quotes.length);
document.getElementById("quote-text").innerHTML = quotes[randomIndex].body;
document.getElementById("author").innerHTML = quotes[randomIndex].author;
