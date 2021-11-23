from app.models import db, Business


def seed_businesses():
    legacy_insurance = Business(
        name="Legacy Insurance Agency", street="1203 N Hobart", city="Pampa", state="Texas", latitude="32.6847", longitude="96.4779", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637642906/mom-and-pops/legacy_gvgn1p.png", user_id=3)
    Finishline = Business(
        name="Finishline Motorcycle shop", street="408 S Cuyler", city="Pampa", state="Texas", latitude="32.6999", longitude="97.2901", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637687614/mom-and-pops/finishline_bhcygq.jpg", user_id=4)
    clarks = Business(
        name="Clarks Propane", street="916 Wilks St", city="Pampa", state="Texas", latitude="32.7573", longitude="97.3536", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637687233/mom-and-pops/clarks_e6lxev.jpg", user_id=5)
    maul = Business(
        name="Maul feed & Seed", street="11385 US Highway 60", city="Pampa", state="Texas", latitude="30.1457", longitude="-97.9663", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637687130/mom-and-pops/maul_jq2wuu.jpg", user_id=6)
    w_w_tank = Business(
        name="W & W Fiberglass", street="2202 Dallas St", city="Pampa", state="Texas", latitude="29.7493", longitude="95.3555", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637687039/mom-and-pops/w_w_lucb6z.jpg", user_id=7)
    winegeart = Business(
        name="Winegeart Funeral Home", street="303 N Frost St", city="Pampa", state="Texas", latitude="29.9977", longitude="-95.1999", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637686900/mom-and-pops/winegeart_diww0i.png", user_id=8)
    steel_horse = Business(
        name="Steel Horse outfitters", street="1800 N. Hobart", city="Pampa", state="Texas", latitude="30.1020", longitude="-95.3275", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637686790/mom-and-pops/steelhorse_afdlou.jpg", user_id=9)
    fishers_pressure = Business(
        name="Fisher's Pure Pressure", street="420 Mary Street", city="Pampa", state="Texas", latitude="29.6941", longitude="98.4545", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637686577/mom-and-pops/fishers_pressure_gzmka3.jpg", user_id=10)
    mejias_bakery = Business(
        name="Mejias Bakery", street="4834 Whirlwind Dr", city="Pampa", state="Texas", latitude="30.5117", longitude="-98.3337", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637686354/mom-and-pops/mejias_bakery_b0zd5y.jpg", user_id=11)
    finleys_fountain = Business(
        name="Devils River Business", street="114 N Cuyler St", city="Pampa", state="Texas", latitude="29.4268", longitude="98.4883", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685881/mom-and-pops/finleys_hgjh4s.jpg", user_id=12)
    Resound = Business(
        name="Resound Business Craft Bar", street="402 Austin St", city="Pampa", state="Texas", latitude="30.9470", longitude="-98.5094", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685811/mom-and-pops/resound_z3ijmr.png", user_id=13)
    altrusa = Business(
        name="Altrusa International", street="P.O Box 918", city="Pampa", state="Texas", latitude="29.7760", longitude="95.4161", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685702/mom-and-pops/altrusa_jjtdmi.jpg", user_id=14)
    armstrong_coffee = Business(
        name="Armstrong Coffee", street="116 South Ward", city="Pampa", state="Texas", latitude="29.9676", longitude="98.9064", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685599/mom-and-pops/armstrong_d7a6j7.jpg", user_id=15)
    bill_allison = Business(
        name="Bill Allison Auto Sales", street="1200 N Hobart", city="Pampa", state="Texas", latitude="29.3042", longitude="94.7953", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685422/mom-and-pops/bill_allison_atafwc.png", user_id=16)
    anthonys = Business(
        name="Anthony's Floor Care", street="2110 Perryton Parkway", city="Pampa", state="Texas", latitude="32.8338", longitude="96.8261", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685319/mom-and-pops/anthonys_f8vg53.jpg", user_id=17)
    arrington_dental = Business(
        name="Arrington Dental", street="208 W. 28th Ave", city="Pampa", state="Texas", latitude="32.7826", longitude="96.7826", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637685186/mom-and-pops/arrington_dental_igdr0l.jpg", user_id=18)
    a_t_yard_service = Business(
        name="A & T Yard Service, Inc", street="1305 S. Hobart", city="Pampa", state="Texas", latitude="32.9523", longitude="96.7360", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637684989/mom-and-pops/a_t_ts1gxw.jpg", user_id=19)
    ammons_roofing = Business(
        name="Ammons roofing", street="511 W. Kentucky St", city="Pampa", state="Texas", latitude="34.0635", longitude="-97.0187", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637658839/mom-and-pops/ammons_ntm9iq.png", user_id=20)
    coffee_shop = Business(
        name="The Coffee Shop", street="220 N Cuyler", city="Pampa", state="Texas", latitude="29.7884", longitude="95.4566", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637658573/mom-and-pops/14199647_10154115809229160_4989958656171439901_n_ivcstp.jpg", user_id=1)
    taylor_insurance = Business(
        name="Taylor and Miller Insurance Agency", street="120 E Browning Ave", city="Pampa", state="Texas", latitude="35.5389401", longitude="-100.9625158", image="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637084455/poolupp/10390191_534325233338012_1256927706468887939_n_cppzng.jpg", user_id=1)

    db.session.add(legacy_insurance)
    db.session.add(Finishline)
    db.session.add(clarks)
    db.session.add(maul)
    db.session.add(w_w_tank)
    db.session.add(winegeart)
    db.session.add(steel_horse)
    db.session.add(fishers_pressure)
    db.session.add(mejias_bakery)
    db.session.add(finleys_fountain)
    db.session.add(Resound)
    db.session.add(altrusa)
    db.session.add(armstrong_coffee)
    db.session.add(bill_allison)
    db.session.add(anthonys)
    db.session.add(arrington_dental)
    db.session.add(a_t_yard_service)
    db.session.add(ammons_roofing)
    db.session.add(coffee_shop)
    db.session.add(taylor_insurance)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
