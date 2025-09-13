import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8">
      <SectionTitle
        heading={"Featured item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center  pb-20 pt-8 px-30 bg-slate-500 bg-opacity-50">
        <div className="ml-20">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            illum labore libero nemo reiciendis? Illo, ut cum! Distinctio nihil,
            vero pariatur ex at labore delectus voluptate aspernatur corporis
            laborum nam? Dignissimos distinctio ipsam rem quaerat dolorem dicta.
            Voluptate doloremque sit voluptatum aperia nobis, minima culpa
            perferendis sint qui tempore tenetur quam corrupti! Temporibus,
            harum ea facere soluta, enim aspernatur iure pariatur molestias
            perferendis blanditiis vitae tempore adipisci ullam vel libero!
            Sequi ipsum facere minus nesciunt eius! Omnis.
          </p>
          <button className="btn btn-outline mt-2 border-0 border-b-4 bg-slate-100">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
