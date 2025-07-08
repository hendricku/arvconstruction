import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";

// The complete and updated data source. All unique content is here.
const categories = [
  {
    slug: "new-regional-rehabilitation-center-for-youth",
    title: "New Regional Rehabilitation Center for Youth",
    img: "/NewRegional.jpg",
    address: "Urayong, Bauang, La Union",
    desc: "A modern facility for youth rehabilitation.",
    images: ["/NewRegional.jpg", "/NewRegional2.jpg", "/NewRegional3.jpg", "/NewRegional4.jpg"],
    details: [
      { title: "Facility Type", desc: "Intensive Intervention and Support Facility" },
      { title: "Governing Body", desc: "Department of Social Welfare and Development (DSWD)" },
      { title: "Key Objective", desc: "Provide a rehabilitative environment for children in conflict with the law." },
    ],
    longDesc: `This project involves the construction of a new Intensive Intervention and Support Facility under Lot No. 2 of the Regional Rehabilitation Center for Youth (RRCY) development. The facility is designed to provide a structured, secure, and rehabilitative environment for children in conflict with the law. It will include specialized spaces for counseling, education, skills training, and psychosocial support, aligned with the DSWD's standards to enhance the delivery of restorative and developmental services to youth beneficiaries across the region.`,
    features: [
      "Counseling rooms",
      "Classrooms and training areas",
      "Safe and secure spaces",
      "Sleeping quarters",
      "Play and outdoor areas",
      "Energy-saving design",
    ],
    testimonial: {
      text: "Solid ganda ng building ng ARV Construction pati Paintings sheshhh",
      author: "Daniel Cobrado",
      avatar: "/daniel.jpg",
    },
  },
  {
    slug: "convention-hall-of-bsp-la-union-branch-office",
    title: "Convention Hall of BSP La Union Branch Office",
    img: "/ConventionHall.jpg",
    address: "La Union Branch, BSP, San Fernando City",
    desc: "Repainting and repair works for the BSP Convention Hall.",
    images: ["/ConventionHall.jpg", "/ConventionHall2.jpg", "/ConventionHall3.jpg"],
    details: [
        { title: "Project Type", desc: "Renovation and Maintenance" },
        { title: "Location", desc: "BSP La Union Branch Office, San Fernando City" },
        { title: "Goal", desc: "Enhance appearance and functionality" },
    ],
    longDesc: "This project involves the repainting of interior spaces and various repair works at the Convention Hall of the BSP La Union Branch Office. The improvements aim to enhance the hall's appearance, functionality, and overall condition, ensuring a cleaner, more welcoming, and well-maintained environment for official functions and community use.",
    features: ["Interior Repainting", "Structural Repairs", "Aesthetic Upgrades", "Functional Improvements"],
    testimonial: null, // This project has no testimonial
  },
  {
    slug: "construction-of-covered-court",
    title: "Construction of Covered Court",
    img: "/court.jpg",
    address: "San Fernando, La Union",
    desc: "A multi-purpose covered court for community use.",
    images: ["/court.jpg", "/court2.jpg", "/court3.jpg"],
    details: [
        { title: "Facility", desc: "Multi-Purpose Covered Court" },
        { title: "Use Case", desc: "Sports, community events, and gatherings" },
        { title: "Structure", desc: "Steel frame with durable roofing" },
    ],
    longDesc: "This project focuses on the construction of a durable and versatile covered court, providing the community with a weather-protected space for sports activities, social events, and other public gatherings. The design prioritizes safety, accessibility, and long-term usability for residents of all ages.",
    features: ["All-Weather Protection", "Basketball Hoops", "Bleachers", "Event Lighting"],
    testimonial: null, // This project has no testimonial
  },
  {
    slug: "completion-of-residential-care-facility",
    title: "Completion of Residential Care Facility",
    img: "/ResidentialCare.jpg",
    address: "San Fernando, La Union",
    desc: "Finalizing a residential care facility for vulnerable individuals.",
    images: ["/ResidentialCare.jpg", "/ResidentialCare2.jpg", "/ResidentialCare3.jpg"],
    details: [
        { title: "Project Stage", desc: "Completion Phase" },
        { title: "Purpose", desc: "Provide safe and supportive housing" },
        { title: "Target Occupants", desc: "Vulnerable individuals requiring residential care" },
    ],
    longDesc: "This project entails the final phase of construction for a residential care facility designed to offer a safe, comfortable, and supportive living environment. The work includes finishing interior and exterior structures, installing essential utilities, and landscaping to create a welcoming home for its future residents.",
    features: ["Comfortable Living Quarters", "Common Areas", "Kitchen and Dining", "Accessible Design"],
    testimonial: null, // This project has no testimonial
  },
];

//====== THE FIX IS HERE ======//
// This function tells Next.js which slugs to pre-render at build time.
// By providing this, we resolve the type ambiguity that causes the error.
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-16 px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          <div className="flex-1">
            <span className="text-emerald-500 font-semibold text-sm flex items-center gap-2 mb-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
              Projects
            </span>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{category.title}</h1>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
              <span>{category.address}</span>
            </div>
            <div className="rounded-2xl overflow-hidden w-full h-80 mb-4">
              <Image
                src={category.images[0]}
                alt={category.title + ' main image'}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            {category.images.slice(1, 4).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden w-full h-32">
                <Image
                  src={img}
                  alt={`${category.title} image ${idx + 2}`}
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            
            {/* Project Details Card */}
            {category.details && category.details.length > 0 && (
              <div className="bg-white rounded-2xl shadow p-6 mb-8">
                <h2 className="text-lg text-gray-900 font-semibold mb-4">Project Details</h2>
                <ul className="space-y-4">
                  {category.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1">{idx === 0 ? "🏡" : idx === 1 ? "🔑" : "🌱"}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-gray-500 text-sm">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description Card */}
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-lg text-gray-900 font-semibold mb-4">About This Project</h2>
              <p className="text-gray-700 mb-6">{category.longDesc}</p>

              {category.features && category.features.length > 0 && (
                <>
                  <h2 className="text-lg font-semibold mb-4">What this project offers</h2>
                  <div className="flex flex-wrap gap-3">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Testimonial Card - Conditionally renders only if a testimonial exists */}
            {category.testimonial && (
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
                <p className="text-gray-700 italic">
                  {`"${category.testimonial.text}"`}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <Image
                    src={category.testimonial.avatar}
                    alt={category.testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-semibold text-gray-900">{category.testimonial.author}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}