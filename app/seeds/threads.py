import json
from unicodedata import category
from app.models import db, Thread


# Adds a demo thread, you can add other threads here if you want
def seed_threads():
    a = Thread(user_id=1, title="Predicting the #1 pick in NBA draft", description="Discussing the first pick of the 2022 NBA Draft.", category_id=1, content=json.dumps({
  "blocks": [
    {
      "key": "agif1",
      "text": "If we are predicting who goes 1 I’m going Chet. He entered the season 1 on most the mainstream boards and nobody else has really been good enough to take that from him.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
}, indent=2))

    b = Thread(user_id=2, title="Dynasty fantasy football mock draft", description="Determining FFL draft order of NFL rookies ", category_id=2, content=json.dumps({
        "blocks": [
    {
      "key": "agif1",
      "text": "This year is a deep but not top heavy class, which makes ranking the prospects significantly harder than most years, as there is no true consensus on whom the best QB or WR prospect is. However, there is a consensus #1 RB, Breece Hall from Iowa State. \n See my full rankings below, and let me know in the comments where you disagree! \n 1. Breece Hall RB Iowa State \n 2. Drake London WR USC \n 3. Malik Willis QB Liberty \n 4. Treylon Burks WR Arkansas \n 5. Sam Howell QB UNC \n 6. Kenny Pickett QB Pittsburgh \n 7. Garrett Wilson WR OSU \n 8. Desmond Ridder QB Ole Miss \n 9. Kenneth Walker RB Michigan State \n 10. Isaih Spiller RB Texas A&M",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
    }))

    c = Thread(user_id=1, title="How Good is Ja Morant", description="How good is Ja Morant?", category_id=1, content=json.dumps({
        "blocks": [
    {
      "key": "agif1",
      "text": "Ja Morant has already been locked in as the #2 pick in the draft for the Grizzlies, as he was the consensus best prospect after Zion. \n Morant emerged from obscurity with a monster sophomore year for Murray State. He showed promise as a hidden gem as a freshman, and elevated his game to a new level with monster scoring and assist numbers, as he is the first NCAA player to ever average 20 points and 10 assists per game. He complemented this with enough SportsCenter top 10 dunks to pass the smell test as an elite prospect. \n What Makes Ja Special? \n Morant has an intersection of athleticism and passing vision that is rarely seen. And most of the examples in his tier of elite at both did very well in the NBA: LeBron James, Chris Paul, John Wall, and Ben Simmons stand out as the only examples in recent memory.  Russell Westbrook is more athletic and eventually proved that he sees the floor, but his vision was a question mark coming out of UCLA. De’Aaron Fox is slightly behind in both. \n Vision and athleticism are two high leverage qualities. The prospects who have both are extremely rare, and they tend to become great pros. \n This is not to say that Ja will necessarily be as good as the aforementioned players. He has a slight frame at 6’3″ and his defense has plenty of room for improvement.  And while he is a solid shooter making 36% 3P and 81% \FT as a 19 year old sophomore, there is some risk that he does not shoot well enough to excel as a little guy. \n But given his monster strengths and no glaring weaknesses, he likely will be good and has upside to be a star. \n Where Would He Go Last Year? \n This is a more interesting discussion than this season, as below Zion and above everybody else is too wide of a range to say much about his value. \n Last season there was a clear top 3 of Luka, JJJ, and Ayton who were all superior prospects. Ja would fit into the next tier of #4-10 with a big cluster of very good prospects. The most similar player to him in that cluster is Trae Young. \n I ranked Trae #15 last year which was too over the top contrarian given his outlier strengths. In retrospect, #5-10 range was where he should have rightfully gone. Incidentally freshman Trae is a good comp for sophomore Ja, as they have similarly slight frames, monster offensive roles, and age (sophomore Ja is just 1 month older than freshman Trae): \n USG	ORtg	AST%	TRB%	BLK% \n Ja	36.2	115.8	51.9	8.6	2.2 \n Trae	38.5	112.1	48.5	5.8	0.7 \n They had near identical output offensively. Trae was a much better shooter, making more FT’s at 86% vs 81\'%' and with over twice the 3PA rate. And he had the tougher schedule as the average defense he faced was 6.8 pts per 100 better than Ja’s opposition– not trivial, but not enough to put Ja’s #’s in the dumpster.\n Ja’s overall offensive output was slightly better, so even once strength of schedule is factored in Trae’s offensive advantage isn’t better by a major margin. Morant in part compensates for his lesser shot by superior ability to get to the rim and finish. \n Now let’s talk about the other areas where Ja is superior \n Physical profile. He is 1″ taller, 3″ longer, and much more athletic. This immediately shows in his superior rebounds and blocks \n Defense. Ja has a reputation for being a lackadaisical defensive player, but Trae’s freshman year defense was all time bad \n Translation to better competition. Trae slipped to 102.8 ORTG in 15 games top 50 kenpom competition, Ja hardly missed a beat with 113.8 ORTG in his 5 games against the top 50. Better athletes are safer to translate up. \n Team impact– even though Morant’s Murray State had a much weaker cast + preseason expectation, they finished with nearly identical kenpom rankings. \n As a freshman, Morant played efficiently next to a ball dominant fringe prospect in Jonathan Stark. This means he can likely pair well with ball dominant NBA stars, which is still a question mark for Trae. \n Collectively, these advantages are very significant. As exciting as Trae’s shooting was, Morant is a decent shooter himself and his superior physical tools, team success, translatability, and defense clearly weigh heavier. \n Given all of this, I found this poll surprising: \n Draft twitter hasn’t truly embraced Morant the way they embraced Trae, even though it’s difficult to come up with any objective analysis where Trae rates better strictly based on pre-draft info. You would have to place an irrational premium on shooting to rate Trae higher. \n Some people believe strength of schedule also boosts Trae’s profile, but this is incorrect. Ja performed better against top defenses, and elite athletes tend to have less risk of translating to better competition. Morant would have obviously been great for any major conference team. \n Trae has improved his value with a good rookie year such that he now may be worth more than Morant. But based on pre-draft, Morant is clearly the better prospect. \n I would have ranked Ja top 5 in last year’s loaded draft for sure, and probably #4 as his big upside is too tantalizing to pass. \n Bottom Line \n From every angle of analysis, there are loads of things to like about Morant and not much to dislike. \n He is so young and unheralded prior to college, that it feels excessive to call him a guaranteed star. But it’s hard to imagine what his fail case would look like. Jeff Teague is a reasonable floor comp, and that is fairly pessimistic as Morant is a clearly better passer than Teague and there isn’t any area where Teague stands out as superior. \n Morant will likely peak as an above average starter, and has clear star upside. There is nobody quite like him in the NBA. He doesn’t quite have Russell Westbrook’s athleticism, or Steve Nash’s craft + IQ, but he has a nice blend of both and it wouldn’t be surprising if he’s the mean average of both players. \n Ultimately Morant has more downside than a typical #1 pick, but he is a solid #2 overall in most drafts. As much as it hurts to miss out on Zion, the Grizzlies are nevertheless walking away with a great consolation prize. \n",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
    }))


    d = Thread(user_id=1, title="2022 Midseason Draft Thoughts", description="Current thoughts on '22 NBA draft midway through the NCAA season", category_id=1, content=json.dumps({
        "blocks": [
    {
      "key": "agif1",
      "text": "Here are some preliminary ideas and food for thought, as we still have more info to come and personally I have not watched much film and most of my thoughts are still developing. \n At a glance, this draft seems suboptimal to have hot takes, because the big 3 of Chet Holmgren, Paolo Banchero, and Jabari Smith seems to be the correct top 3, and then the draft is dreadfully thin after that. Let’s start by dissecting the top 3. \n Chet’s Red Flags \n But Chet has concerns of his own, with an outlier poor frame being listed at 7′ 195 pounds. The most physically similar player is Aleksej Pokusevski listed at 7’0 190 pounds, who has not remotely played like an NBA 1st round draft pick through his first 1.5 seasons. \n Evan Mobley’s success may inspire Chet’s confidence, but Mobley was listed 20 pounds heavier at 215. Kevin Durant could not bench press any reps at the combine, but he was listed at 204 pounds in college in spite of being 3″ shorter and 1 year 5 months younger than Chet as a freshman. Kevin Garnett (6’11 217) and Chris Bosh (6’10 210) are also examples of skinny bigs who were clearly beefier than Chet. \n While there have been plenty of skinny bigs who have succeeded in the NBA, none have been as skinny as Chet and all of them have been significantly more athletic to boot. His physical tools are a major concern that cannot be overlooked. \n Further, is he really quick enough to chase guards on the perimeter? Steal rate is far from a perfect measurement of perimeter defense, but it is correlated and he has posted a paltry 1.1% thus far. This is for a Gonzaga team that does not suppress steals against a mid-major schedule. This is how he compares to other recent Gonzaga bigs: \n Player   Stl% \n Brandon Clarke   2.3 \n Killian Tillie	2.3 \n Kelly Olynyk	1.8 \n Rui Hachimura	1.7 \n Johnathan Williams	1.5 \n Zach Collins	1.5 \n Domantas Sabonis	1.2 \n Przemek Karnowski	1.1 \n Drew Timme	1.1 \n Chet Holmgren	1.1 \n He is stuck at the bottom, which does not doom him for NBA success and still could easily improve with a flurry of steals. But this is further worrisome for a player who already has significant physical flags. If he can be beaten on the perimeter and bullied down low, how much value can he really provide defensively in spite of his rim protection ability? \n His saving grace is his 7’6 wingspan that he uses to block shots at an excellent rate. Although it is worth wondering why he can’t use that monster length to reach into the passing lanes and generate more steals. \n Can He Score vs NBA Defenses? \n Further exacerbating worries is that Gonzaga has largely been beating up mid-major competition. They did schedule 5 non-conference games vs elite high major competition, and Chet’s offensive production fell off a cliff in those games. \n Granted, this is a small sample size it and it is far from a death knell. But for a guy with frightening physical flaws, it is somewhat scary to overinvest in his domination of mid-major competition when his offense shriveled up against high major defenses. \n For a quick comparison– kenpom splits stats vs. games against top 50 teams. In Chet’s case, this would be the 5 high major games plus a road game at #72 Santa Clara. In this splits, his offense drops from 21.6 usg 128 ORtg 11.5\'%' ast to 18.5 usg, 108 ORtg, 6.2\'%' ast. \n If you want to compare it to Mobley, he saw essentially no drop from his 33 game sample of 23.6\'%' usg 119.4 ORtg 14.2\'%' ast to 23.6\'%' usg 119 ORtg 13.1\'%' ast in a 17 game sample against Tier A teams. \n Between the splits and physical tools, it is dangerous to group Chet and Mobley too loosely. They are a similar mold at a similar age and both dominated college basketball, with Chet actually posting a higher freshman BPM at 15.6 (thus far) vs 13.7. But he also has more significant warts, which gives him both lower upside and a more significant downside than Mobley. \n Holmgren’s overall production is too good to get too low on him because of his flaws. He is long, intelligent, skilled, and efficient, and has clear potential to be a highly useful NBA player. But it is a strange double standard that his weirdness is not adding any negative skew to his draft hype, whereas it is tanking Edey’s stock to the dirt. \n Where Do These Guys Fit Into 2022? \n It’s difficult to say because both are so weird, but let’s start with the clearer points that feel less hot take-y. \n Paolo Banchero and Jabari Smith are not generational talents, but they are both solid top 2 candidates who would be considered as options at #1 in any draft without a generational talent ahead of them. Paolo is more of a traditional superstar and could be a taller Jayson Tatum or Carmelo Anthony with better defense. He is a surprisingly good passer for such a big and athletic scorer, which makes it unlikely he flops as hard as his fellow Dukie Jabari Parker. He likely has some more boring outcomes like Tobias Harris in his range, but overall he is a fairly comfortable choice at either #1 or #2. \n Both are perfectly reasonable choices at #1 overall. Right now there is no clear answer. Gun to my head, I would lean toward Paolo as he does not have any funky flaws to fret over, but that may change with more information and a deeper dive into the film. \n It is difficult to see how it would be correct to draft Chet over either of these guys, since he has so much weirdness weighing him down whereas the other two guys do not by either traditional scouting or analytics. \n Right now, it would seem the safe place to rank Chet would be #3, since his weirdness is concerning, but is difficult to say it is enough to bump him out of the big 3 without much strength in the draft behind him. If we want to have a hot take that may prove to be fruitful or disastrous in the future, Shaedon Sharpe and Jaden Ivey could both be considered above Chet. \n Sharpe is particularly interesting, because he was #1 RSCI in this year’s high school class before reclassifying to Kentucky, and is now somehow 7th on ESPN’s current board in spite of the draft turning anemic after the top 3. #1 RSCI’s bust reasonably often, but they also become stars at a decent rate as well. He has a 7’0 wingspan, and is an athletic finisher with a smooth looking stroke, and could easily be the best player in the class. \n He is a bit old for his high school class, being only 2 weeks younger than Jabari Smith, so he also could bust completely. But outside of the top 3, there will be loads of busts and boring outcomes so why not roll the dice on him at #4? Hopefully he starts to play for Kentucky to give a clearer image of what he brings to the table. \n The only other reasonable choice at #4 is Jaden Ivey who is fairly similar to Sharpe as a long and athletic SG with a nice outside stroke. His wingspan is not quite as long at 6’10, but he is only 3.5 months older and has more proven production at the NCAA level, so it is reasonable to consider him above Sharpe. \n  After those guys, the draft starts to become truly tragic. Prospects that I would look at in the mid-late lottery include Jalen Duren, Kendall Brown, Trevor Keels, Mark Williams, Dyson Daniels, Keegan Murray, Bennedict Mathurin, TyTy Washington, Kennedy Chandler, Tari Eason, and Walker Kessler. \n " ,
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
    }))
    e = Thread(user_id=1, title="2022 mid-late lottery players to consider", description="Quick thoughts on guys to consider outside of the top 5", category_id=1, content=json.dumps({
        "blocks": [
    {
      "key": "agif1",
      "text": "Jalen Duren has been fairly boring as a freshman, but he is toolsy and only turned 18 in November. His top 2 kenpom comps are Derrick Favors and Andre Drummond, which is something. He likely belongs in the top 10 by default with such thin options on the board. \n Kendall Brown fits a nice archetype as a role playing wing at 6’8 with good athleticism, but his offense is a bit too limited to get too excited. \n Trevor Keels is fairly boring as an undersized SG with limited athleticism. But he is super young and offers a bit of everything. Pesky perimeter defense, decent enough PG skills, good basketball IQ to limit mistakes, and a passable jump shot that has plenty of time to improve as he does not 19 until after the draft in August. His boringness may cause him to be underrated, but his well roundedness and youth make him an option worth considering in the top 10. \n  Dyson Daniels is in a similar boat, as he is not particularly athletic or dynamic at scoring, but does a bit of everything as a 6’6″ SG. While he does not share their athleticism, he has been a more productive player for G League Ignite than both Jalen Green and Jonathan Kuminga, and in a weak draft is a reasonable choice in the top 10. \n Mark Williams is a nice big man prospect, as he has a monstrous 7’7 wingspan and is fluid, efficient, and a good well rounded basketball player. He is currently projected at #23 overall, and reminisces of past draft steals in the 20’s such as Robert Williams and Clint Capela. So it likely would be a mistake to let him slide to the 20’s in such a poor draft, as he seems to be a clear lottery value. \n Bennedict Mathurin is a somewhat boring spot up SG, but he’s decent enough to deserve lotto consideration in this dumpster fire of a draft. \n Keegan Murray is a highly productive weirdo. His stats are excellent across the board, but he does not eye test on par with his stats as he is somewhat slow and unathletic, and his defense is not as good as his steal, block, and rebound rates imply. Iowa has had a number of prospects post excellent college statistics without being useful NBA players, such as Luka Garza, Aaron White, and Jarrod Uthoff, because they recruit non-toolsy guys meant to perform as 4 year college players and not be future pros. Murray is clearly the best of the bunch, and he is so productive he deserves lottery consideration. But he also should be valued lower than his #’s to some extent, and it is difficult to place him. He could be a Robert Covington-esque role player that is very useful. I’ll probably stash him somewhere in the lottery and call it a day, but I am currently unsure exactly where to rate him. \n TyTy Washington is a sophomore aged freshman who is an incredibly boring mold of undersized SG. But John Calipari has a habit of making future NBA stars seem boring in college, and he is fairly similar to Tyrese Maxey who was underdrafted by the NBA and underrated by myself, so perhaps his top 10 hype will prove to be justified after all. \n Tari Eason is a fairly interesting sleeper currently slotted for round 2 at #34 in ESPN’s draft. For a 6’8 wing, he offers a compelling intersection of ability to create his own shot at the rim and make plays on defense, with excellent 3.8% stl 6.0% blk rates. His 71% career FT implies competent shooting, but his 28.4% 3 on somewhat low volume makes his ability to make NBA 3’s look somewhat dicey for a prospect who will be 21 on draft night. He also averages 1.1 assists vs 2.0 turnovers and has a disappointing 6’9 wingspan for a 6’8 prospect, so there are plenty of flags to temper enthusiasm. He has weirdo upside but it is easy to see why NBA teams may be skeptical of drafting him too soon. \n Kennedy Chandler is an athletic PG who can get to the rim, create for others, and play pesky perimeter defense with an excellent 4.4\'%' steal rate. But his shooting and efficiency leave quite a bit to be desired for a 6’0 PG, and he rebounds like his size with an anemic free throw rate. \n Walker Kessler is a fascinating weirdo. He has an insane block rate, the highest of any NCAA player averaging 12+ minutes per game dating back to 09-10 when it was first tracked. He has also has an excellent steal rate for a big, a hyperefficient 73.7% 2P, a vaguely competent outside shot, and a monster 14.8 BPM which is not too far behind Holmgren or Edey while being just ~9.5 months older. He does not score with great volume and has an anemic free throw rate for his size, but anybody with such monstrous statistical peaks is going to deserve a closer analysis once the draft approaches. \n So where does Zach Edey fit in? It’s tough to say. These guys are all more traditional NBA archetypes, but they are all fairly boring. At what point do you pull the trigger on a guy who may make low post scoring relevant in the NBA once again, instead of aiming for a useful role player who likely has limited upside? There’s not a clear answer. It is not completely insane to rank all of these guys ahead of him, but it is insane to rank them and 29 additional guys above Edey as ESPN currently does." ,
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
    }))

    f = Thread(user_id=1, title="Overhyped Lottery prospect this year", description="Overrated players on ESPN's current board", category_id=1, content=json.dumps({
"blocks": [
    {
      "key": "agif1",
      "text": "Johnny Davis, ESPN rank: 8th \n Davis is in the midst of an excellent season for Wisconsin as he has been their go to scorer for a team with limited offensive talent. He is fairly well rounded too, he rebounds well for a guard, he avoids turnovers, and he is capable of making plays defensively. \n But at 6’5 with mediocre length and athleticism, he has an underwhelming physical profile for an underwhelming NBA mold. His top 3 kenpom comps are Alec Burks, James Bouknight, and Jarrett Culver, all lotto picks with collectively underwhelming results. It’s likely safe to call Culver a bust, Bouknight is still early but appears to be on the fast track to busting, and Burks had an acceptable career as a journeyman but isn’t exactly what you hope for in the lottery. \n So how much can we realistically expect from Davis? He does enough to have a decent enough career like Burks, but he could also bust. And how much upside is there to be better than Burks when he seems to have a bit less length and athleticism? His main value seems to come from making pullup mid-range jumpers, which is useful on a college team with no other scoring options but for a player with his physical tools in the NBA seems like a limited calling card. \n He is still productive enough such that he isn’t that overrated and I would likely rate him in the 15-20 range. But there are more attractive value propositions inside the top 10. \n  Ochai Agbaji, ESPN: 12th \n This is the highest rated prospect who simply has no business going in round 1. He is 6’5 with a 6’10 wingspan, and offers little in terms of basketball playing ability other than outside shooting where he is making 46.4% from 3 for the season. \n But the issue is that this seems to be almost entirely variacne based, as he has a mediocre 69.6\'%' FT to support it and just 68.9\'%' FT for his NCAA career. \n He can create his own shot at the rim in doses, but not so much for a SG who turns 22 in April and is not much of a passer or defensive playmaker. Perhaps he finds a niche as a role playing bench SG, but it is difficult to see how somebody with such few strengths and so many weaknesses belongs in round 1, let alone the lottery. \n Marjon Beauchamp, ESPN: 14th \n Beauchamp fits a nice 3 + D mold as a 6’7 wing, but he isn’t that good for a guy who is already 21 years old. \n He showed promise as a shooter last season for his community college team, making 39.8% 3P on 8.6 3PA/game and 76.8% FT, but in the G League this year he is only attempting 2.8 3PA per game in spite of playing huge minutes at 36.6. In general his offense is limited for his age, with a meager 16.8\'%' usage rate for G League Ignite.\n His calling card would need to come on defense, where he has good dimensions at 6’7 with 7′ wingspan. His stocks and rebounding are solid and he is considered to be good on this end, which is why there is at least a case that he isn’t crazily overrated. But you would want to see more offensively for a 21 year old wing before taking him in the lottery. \n Jaden Hardy, ESPN: 17th \n Hardy entered the season with top 5 hype and has been remarkably bad for G League ignite, as he is essentially a 6’4 one dimensional scorer with terrible shooting percentages, making 40.2% 2P and 26.9% 3P. \n He doesn’t offer much in the way of passing, rebounding, or defense, and is pretty much the worst possible NBA mold of undersized and inefficient chucker. The only redeeming quality thus far is that he is 30/34 FT, so perhaps he can be developing into a much more efficient player and become something like an Anfernee Simons. \n But man this is such a dreadful archetype to gamble on, especially when there is such little goodness that he has shown for G League ignite. He could eventually justify a first round value, but I wouldn’t want to run a team that rolls the dice on him. \n ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 168,
          "style": "color-rgb(0,0,1)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
    }))

    g = Thread(user_id=3, title="Are the Brewers contenders in 2022?", description="Analyzing the Brewers chances in 2022", category_id=3, content=json.dumps({
        {
  "blocks": [
    {
      "key": "8hte7",
      "text": "Coming off of a historic 2021 season that saw the Brewers best pitching staff since at least C.C. Sabathia was in town, the Brewers have high expectations for '22. ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "1g70a",
      "text": "How high are the expectations? ",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "3qrpo",
      "text": "Online sportsbooks project the  Brewers to win 91.5 games, and fangraphs (click for link) projects the Brewers having an 82.5% chance of making the MLB playoffs. ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 62,
          "length": 28,
          "style": "ITALIC"
        },
        {
          "offset": 63,
          "length": 27,
          "style": "color-rgb(41,105,176)"
        },
        {
          "offset": 90,
          "length": 72,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [
        {
          "offset": 63,
          "length": 9,
          "key": 0
        }
      ],
      "data": {}
    },
    {
      "key": "4gvpa",
      "text": "",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "bkm7m",
      "text": "What do we think?",
      "type": "header-four",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 17,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "730m5",
      "text": "This seems reasonable upon first glance, as the pitching rotation and bullpen filled with familiar faces combine to provide a top of the line pitching rotation for this Brewers roster. However, the brewers lineup has struggled to produce at an above average rate in recent years, as the lack of quality depth and Christian Yelich's rapid decline have left the Brewers with a huge need for power in the lineup. ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 410,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "73epk",
      "text": "",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "152o5",
      "text": "As currently constructed (always subject to change with aggressive General Manager David Stearns) the opening day lineup appears to be set as such: ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 148,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "d60ag",
      "text": "2B - Kolten Wong",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 16,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "169qn",
      "text": "SS - Willy Adames ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 18,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "349uk",
      "text": "LF - Christian Yelich",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 21,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "ca86f",
      "text": "RF - Hunter Renfroe ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 20,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "6avc8",
      "text": "3B - Luis Urias ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 16,
          "style": "color-rgb(51,51,51)"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "fontfamily-Times"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "er8g6",
      "text": "1B - Rowdy Tellez / Keston Hiura",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 32,
          "style": "color-rgb(51,51,51)"
        },
        {
          "offset": 0,
          "length": 32,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 32,
          "style": "fontfamily-Times"
        },
        {
          "offset": 0,
          "length": 32,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "fmp0e",
      "text": "C - Omar Narvaez",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 16,
          "style": "color-rgb(51,51,51)"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "fontfamily-Times"
        },
        {
          "offset": 0,
          "length": 16,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "c4b2o",
      "text": "CF - Andrew McCutchen / Lorenzo Cain",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 36,
          "style": "color-rgb(51,51,51)"
        },
        {
          "offset": 0,
          "length": 36,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 36,
          "style": "fontfamily-Times"
        },
        {
          "offset": 0,
          "length": 36,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "ftv6s",
      "text": "DH - Tyrone Taylor",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 18,
          "style": "color-rgb(51,51,51)"
        },
        {
          "offset": 0,
          "length": 18,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 18,
          "style": "fontfamily-Times"
        },
        {
          "offset": 0,
          "length": 18,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "86dp0",
      "text": "A solid lineup no doubt, with the significant changes from last year being the addition of Hunter Renfroe in place of Avisail Garcia, and Andrew McCutchen replacing Jackie Bradley Jr. in CF. The addition of Renfroe in particular is potentially game changing, as he has multiple 30HR seasons and should benefit from a transition to hitter friendly Miller Park. A hot season from Renfroe could go a long ways towards getting the lineup back on track and producing at an above average level. If Christian Yelich can get back on track, Renfroe's power transitions nicely to Miller Park, and we get some internal improvement from young players such as Keston Hiura and Luis Urias, we could be looking at an above average lineup - which would make the Brewers a top 3-5 team in baseball when paired with the elite pitching staff. ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 824,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {
        "text-align": "start"
      }
    },
    {
      "key": "6cluc",
      "text": "",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "bgkft",
      "text": "All in all I expect another fun season, a NL central title, and a punchers chance in the playoffs at beating the powerhouse LA Dodgers, which is all you can ask for from a Brewers team that is at a significant financial disadvantage relative to their competition. If I had to make a prediction - I would take the over, as the Brewers have shown the ability to win a majority of their close games utilizing the value of Josh Hader out of the bullpen in key moments. Additionally, GM David Stearns may be in his last season with the team - meaning he may be inclined to trade away some future assets (such as former 1st round pick Ethan Small) to improve the current team and make a push to win the World Series during his excellent stint here in Milwaukee.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 755,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "a3n0d",
      "text": "Let me know what you guys expect in the comments below!",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 55,
          "style": "color-rgb(0,0,0)"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {
    "0": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "url": "https://www.fangraphs.com/standings/playoff-odds",
        "targetOption": "_blank"
      }
    }
  }
}
    }))


    # Thread.__table__.create(db.session.bind)

    db.session.add(a)
    db.session.add(b)
    db.session.add(c)
    db.session.add(d)
    db.session.add(e)
    db.session.add(f)
    db.session.add(g)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the threads table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_threads():
    db.session.execute('TRUNCATE threads RESTART IDENTITY CASCADE;')
    db.session.commit()