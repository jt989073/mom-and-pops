from app.models import db, Business


def seed_businesses():
    taylor_insurance = Business(
        name="Taylor and Miller Insurance Agency", street="120 E Browning Ave", city="Pampa", state="Texas", latitude="35.5389401", longitude="-100.9625158", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637084455/poolupp/10390191_534325233338012_1256927706468887939_n_cppzng.jpg", user_id=1)
    coffee_shop = Business(
        name="The Coffee Shop", street="220 N Cuyler", city="Pampa", state="Texas", latitude="29.7884", longitude="95.4566", image="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2016/09/21134258/hQhi7ZZN.png", user_id=1)
    five_points = Business(
        name="Five Points Distilling", street="8575 Union Hill Rd", city="Pampa", state="Texas", latitude="32.6847", longitude="96.4779", image="https://res.cloudinary.com/dis83syog/image/upload/v1636208014/SpeakEasy/Screen_Shot_2021-11-06_at_10.12.32_AM_zgguty.png", user_id=3)
    firestone_robertson = Business(
        name="Firestone & Robertson Distilling Co.", street="4250 Mitchell Blvd", city="Pampa", state="Texas", latitude="32.6999", longitude="97.2901", image="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2020/01/22143940/Business0_a1208968-5056-a348-3a53f2590489c450.jpg", user_id=4)
    blackland = Business(
        name="Blackland Business", street="2616 Weisenberger St", city="Pampa", state="Texas", latitude="32.7573", longitude="97.3536", image="https://res.cloudinary.com/dis83syog/image/upload/v1636208188/SpeakEasy/images_h57umn.png", user_id=5)
    crowded_barrel = Business(
        name="Crowded Barrel Whiskey Co.", street="16221 Crystal Hills", city="Pampa", state="Texas", latitude="30.1457", longitude="-97.9663", image="https://crowdedbarrelwhiskey.com/wp-content/uploads/2021/03/cb_1-black-copy-small.jpg", user_id=6)
    eight_wonder = Business(
        name="8th Wonder Business", street="2202 Dallas St", city="Pampa", state="Texas", latitude="29.7493", longitude="95.3555", image="https://res.cloudinary.com/dis83syog/image/upload/v1636208595/SpeakEasy/download_uhzz8h.png", user_id=7)
    old_humble = Business(
        name="Old Humble Distilling Company", street="19103 Continental Pkwy", city="Pampa", state="Texas", latitude="29.9977", longitude="-95.1999", image="https://static.wixstatic.com/media/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg/v1/fit/w_2500,h_1330,al_c/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg", user_id=8)
    fox_seeker = Business(
        name="Fox & Seeker", street="5750 N Sam Houston Pkwy", city="Pampa", state="Texas", latitude="30.1020", longitude="-95.3275", image="https://pbs.twimg.com/profile_images/993602982238339072/1eP9rwMQ.jpg", user_id=9)
    rebecca_creek = Business(
        name="Rebecca Creek Business", street="26605 Bulverde Rd", city="Pampa", state="Texas", latitude="29.6941", longitude="98.4545", image="https://www.rebeccacreekBusiness.com/schema-image.png", user_id=10)
    ranger_creek = Business(
        name="Ranger Creek Brewing & Distilling", street="4834 Whirlwind Dr", city="Pampa", state="Texas", latitude="30.5117", longitude="-98.3337", image="https://images.squarespace-cdn.com/content/v1/59da7f606f4ca34ba294a74e/1519252036931-OUZC5KYJ59OIA63HQR7I/RangerCreek_Mainimage1.jpg", user_id=11)
    devils_river = Business(
        name="Devils River Business", street="401 E Houston St", city="Pampa", state="Texas", latitude="29.4268", longitude="98.4883", image="https://www.texasbrigades.org/wp-content/uploads/2020/01/devils-river-whiskey-image-black.jpg", user_id=12)
    artisan = Business(
        name="Artisan Business Craft Bar", street="402 Austin St", city="Pampa", state="Texas", latitude="30.9470", longitude="-98.5094", image="https://artisans.al/wp-content/uploads/2017/10/Artisan-image-Finale-01-1170x399.png", user_id=13)
    whitmeyer = Business(
        name="Whitmeyer's Distilling Co.", street="5301 Nolda St", city="Pampa", state="Texas", latitude="29.7760", longitude="95.4161", image="https://www.bourbonbanter.com/wp-content/uploads/2018/07/Whitmeyers-Distilling-Company-Header.jpg", user_id=14)
    hill_country = Business(
        name="Hill Country Distillers", street="723 Front St", city="Pampa", state="Texas", latitude="29.9676", longitude="98.9064", image="https://res.cloudinary.com/dis83syog/image/upload/v1636209253/SpeakEasy/images2_sartus.jpg", user_id=15)
    texas_tail = Business(
        name="Texas Tail Business", street="2416 Postoffice St", city="Pampa", state="Texas", latitude="29.3042", longitude="94.7953", image="https://res.cloudinary.com/dis83syog/image/upload/v1636209802/SpeakEasy/Screen_Shot_2021-11-06_at_10.42.53_AM_jlmol4.png", user_id=16)
    duckworth = Business(
        name="Duckworth Business", street="3737 Atwell St", city="Pampa", state="Texas", latitude="32.8338", longitude="96.8261", image="https://res.cloudinary.com/dis83syog/image/upload/v1636210242/SpeakEasy/Screen_Shot_2021-11-06_at_10.50.16_AM_hy7zju.png", user_id=17)
    deep_ellum = Business(
        name="Deep Ellum Business", street="2880 Clover St", city="Pampa", state="Texas", latitude="32.7826", longitude="96.7826", image="https://res.cloudinary.com/dis83syog/image/upload/v1636210524/SpeakEasy/336595_1561738304_zsxgfd.jpg", user_id=18)
    lockwood = Business(
        name="Lockwood Distilling Company", street="506 Lockwood Dr", city="Pampa", state="Texas", latitude="32.9523", longitude="96.7360", image="https://res.cloudinary.com/dis83syog/image/upload/v1636210730/SpeakEasy/download_1_ayoe0f.png", user_id=19)
    trinity_river = Business(
        name="Trinity River Business Home of Silver Star Spirits", street="1734 E El Paso St", city="PampaFort Worth", state="Texas", latitude="34.0635", longitude="-97.0187", image="https://res.cloudinary.com/dis83syog/image/upload/v1636210994/SpeakEasy/unnamed_lywnzh.jpg", user_id=20)

    db.session.add(taylor_insurance)
    db.session.add(coffee_shop)
    db.session.add(five_points)
    db.session.add(firestone_robertson)
    db.session.add(blackland)
    db.session.add(crowded_barrel)
    db.session.add(eight_wonder)
    db.session.add(old_humble)
    db.session.add(fox_seeker)
    db.session.add(rebecca_creek)
    db.session.add(ranger_creek)
    db.session.add(devils_river)
    db.session.add(artisan)
    db.session.add(whitmeyer)
    db.session.add(hill_country)
    db.session.add(texas_tail)
    db.session.add(duckworth)
    db.session.add(deep_ellum)
    db.session.add(lockwood)
    db.session.add(trinity_river)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
