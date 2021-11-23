from app.models import db, Review
import random
import datetime


def seed_reviews():
    review_dict = {
        1: [
            "I did not have a good expierence, less than professional!",
            "I give this unprofessional insurance company a very very bad feed back...",
            "I had an appointment a week in advance. When I should up, they had a hand writen sign that said to reschedule. I had to drive 40 min to come here. I received no phone call, and no email. I do not recommend using them.",
            "They were closed when they posted online they were open"
            "We had a difficult time understanding the young lady. Since that is the introduction to the product, it would be better in a quieter setting."],
        2: [
            "Owners are really friendly. The warehouse is a bit hidden since we didn't see any signs out in the front. So make sure you keep driving towards the back.",
            "Would not be my first choice to do business with, but not exactly my last option either",
            "I'd probably go again just to support a local business, but it wasn't my favorite by any means. Still, give it a shot and see what you think.",
            "Came here for the tour and enjoyed the place.   It was a hot summer day, so it was a little rough.",
            "Ok place and awesome customer service. They always do a \"good enough job\". From baby shower invitations to business banners. Great company that remembers your name and always greet you with a smile."],
        3: [
            "Staff had less personality then the table in which I sat but the latte was good",
            "Decent experience. I loved the people",
            "This place is good. We stopped by on our way out. You order on your phone and pay for it. Wait time was 30 minutes which we couldn't understand how anything in Pampa Texas takes that long",
            "I'm sure due to COVID-19 things are quite different then they usually are. There was an outside picnic like area with regulated seating distancing. One female who appeared to run the show at the window where you can order. Enjoyed the service",
            "Learned a lot about the overall experience, and they were very helpful with helping me understand what was going on"],
        4: [
            "This place has the best drinks and great customer service! Very nice personnel! ",
            "I really liked enjoyed my experience at this Business! You get a lot of options to choose from. It was really busy during the time I went but they made sure to check in on us to make sure we were taken care of.",
            "Would not do bussiness with anyone else! My only complaint is that they keep the darn air conditioner set to freeze out anyone!",
            "This place is a whole vibe! From the lighting to the drinks. We sat on the couches near the rear of the bar and they are so comfortable & the staff is so accommodating and attentive. Thank you to much, we'll definitely be back",
            "Julian was very knowledgeable of the process of the development of the products they produce. Over all our experience was awesome! We will be coming back!!"],
        5: [
            "Burgers are delicious and do not leave without a slice or 2 of pie! Thank you for the quick and friendly service Ladies.",
            "What a great group of people!",
            "Thank you for all the years of wonderful service!",
            "Great service and atmosphere!",
            "I want to thank Ben and the staff for all of their hard work on getting my file together for an investment property that I will be purchasing in Pampa. Ben has been there to answer all of my questions and respond to emails in a timely manner. I plan on bringing more business to you guys very soon!! Thank you guys again for all that you do for the real estate industry."]
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
