from app.models import db, Review
import random
import datetime


def seed_reviews():
    review_dict = {
        1: [
            "As a whiskey lover visiting Houston I was really looking forward to trying their whiskey. But after not being greeted or even acknowledged standing at the bar with my boyfriend we just gave up. Really disappointing experience",
            "2 guys behind the bar & its not full & they didn't even have the courtesy to say a word. This isn't representative of Texas. Don't bother.",
            "Didn't really like how the tour didn't start on time. We rushed through lunch to make sure we got there exactly at 2pm but the tour didn't actually start till 2:30pm since they were waiting on others to arrive.",
            "The products are great, but the unfortunate truth is they do not care about their customers. I've attempted to contact this company on multiple occasions via email and telephone to visit the distillery and purchase a number of whiskey barrels as advertised on their site. I've even made it a point to call during business hours. None of my requests have been addressed by anyone in this company so one can only assume that they really do not care about their customers.",
            "We had a difficult time hearing at the beginning of the tour as we were in an area that wasn't closed off from warehouse noise. Since that is the introduction to the product, it would be better in a quieter setting. The guide was difficult to see , repeatedly complaining about a large blister on his tongue. The whisky was quite good but this new distillery needs to spruce things up to charge the prices they are."],
        2: [
            "Owners are really friendly. The warehouse is a bit hidden since we didn't see any signs out in the front. So make sure you keep driving towards the back.",
            "Ordered a 750ml bottle of their spiced whiskey a little while ago, and it was fine - but sorta just fine. Clocking in around $35 or so, the price wasn't TOO bad, but it wasn't a bargain either. The taste of the whiskey was alright, but if spiced whiskey is your thing, I'd probably look elsewhere.",
            "I've had a number of whiskeys in my time, and the bite on this whiskey is a little much. I'd probably buy it again just to support a local business, but it wasn't my favorite by any means. Still, give it a shot and see what you think.",
            "Came here for the tour and enjoyed the place.   It was a hot summer day, so it was a little rough.   they have a tasting bar towards the main entrance and you can pay for your tour there and they will re-direct you to the paymaster building for the tour up on the second floor.  For the intro of the tour, we stood around for about 20 minutes while the gave a history on the distillery. I was kinda hankering to sit down and they had all this seating in open room. Not sure why we didn't just sit. After going over the history, you will take a little tour of the distilling room and also the barrel aging room and then back to the 2nd floor for the tasting. The spirits were just ok in my opinion. Nothing fancy, however they do claim to be the oldest operating whiskey distillery (7 years old).",
            "A young distillery - built in 2015 with a minimum of 3 years of barrel aging before sale as a whiskey by law (often longer in practice), none of the whiskeys distilled here are what you are finding at your local market. If you are familiar with whiskey distillation, I'd skip the tour and hit the bar."],
        3: [
            "A small batch rum distillery. Spiced Rum is my favorite. It is small and open air.  I come on Saturdays for their micro bar & tasting",
            "Very informative tour.  My group and I had a good time.  Rum was tasty especially the Texas Spice Rum.",
            "This place is good. All about bourbon. We stopped by on our way out from Rooftop Reds around the corner (that place is over rated). You order on your phone and pay for it. Wait time was 30 minutes which we couldn't understand as the place was empty",
            "I'm sure due to COVID-19 things are quite different then they usually are. There was an outside picnic like area with regulated seating distancing. One female who appeared to run the show at the window where you can order. A few drinks on the special menu. Penicillin with Peated Bourbon, Lemons, Honey and Ginger. Moonshine with Strawberry and Mint, Old fashioned Bourbon.",
            "This was after we did the Jameson tour. Good, up and coming brand. Saw the stills and the way they make the stuff. Usual bit. Best part about this tour was that I actually got to learn how to properly taste whiskey and enjoy it."],
        4: [
            "This place has the best drinks and great customer service! Very nice personnel ! ",
            "I really liked enjoyed my experience at this Distillers! You get a lot of options to choose from when it comes to whiskey. It was really busy during the time I went but our server made sure to check in on us to make sure we were taken care of.",
            "The perfect Saturday outing! Learn something educational about the spirit distilling process and enjoy Texas craft bourbon!",
            "This place is a whole vibe! From the lighting to the drinks. We sat on the couches near the rear of the bar and they are so comfortable & the staff is so accommodating and attentive. Thank you to much, we'll definitely be back",
            "Julian gave us the tour, he was very knowledgeable of the process of the development of their whiskey and other products they produce, in addition to the history of the cbuilding. The drinks that Mike made for us, specifically our Old Fashions, and the BJ Collins were exceptional! Over all our experience was awesome! We will be coming back!!"],
        5: [
            "Wonderful place with craft drinks and delicious foods. Just a heads up there are some stairs to get to the upper level where the bar is located.",
            "HOW have I never been here before?!? SUPER cool venue, great bartender, delish food, and AMAZING bourbon!",
            "Fantastic hidden gem! Food and drinks are phenomenal! From the burgers to the old fashioned. The tap room is amazing!",
            "You can tell the pride and attention to detail given to the craft just by the way the tour guide presents information. Very interesting tour and very generous, knowledgable, and genial bar staff.",
            "My coworker and I came here for a tour, back in August. We learned so much about the distilling process. Prior to the tour, we watched the extremely skilled bartender make some very elaborate cocktails. You need to stop here if you're looking for a nice strong drink and lovely people."]
    }



    total_users = 20
    for bus_id in range(1, 21): #TODO: change this number as businesses are added
        used_users = []
        for _ in range(1, 11):

            while True:
                new_user_id = random.randint(1, total_users)

                if new_user_id not in used_users:
                    used_users.append(new_user_id)
                    break
            new_rating = random.randint(1, 5)
            new_review = random.choice(review_dict[new_rating])
            new_review = Review(
                review=new_review,
                user_id=new_user_id,
                rating=new_rating,
                business_id=bus_id,
            )
            db.session.add(new_review)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
