import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";

const categories = [
  {
    slug: "new-regional-rehabilitation-center-for-youth",
    title: "New Regional Rehabilitation Center for Youth",
    img: "/NewRegional.jpg",
    address: "San Fernando, La Union",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    images: ["/NewRegional.jpg", "/NewRegional2.jpg", "/NewRegional3.jpg", "/NewRegional4.jpg"],
    details: [
      { title: "Property details", desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." },
      { title: "Smart home access", desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." },
      { title: "Energy efficient", desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." },
    ],
    longDesc: `This project involves the construction of a new Intensive Intervention and Support Facility under Lot No. 2 of the Regional Rehabilitation Center for Youth (RRCY) development in Urayong, Bauang, La Union. The facility is designed to provide a structured, secure, and rehabilitative environment for children in conflict with the law. It will include specialized spaces for counseling, education, skills training, and psychosocial support, aligned with the Department of Social Welfare and Development&apos;s (DSWD) standards.

This re-advertised project aims to ensure th timely completion of critical infrastructure that will enhance the delivery of restorative and developmental services to youth beneficiaries across the region.`,
features: [
  "Counseling rooms",
  "Classrooms and training areas",
  "Safe and secure spaces",
  "Sleeping quarters",
  "Play and outdoor areas",
  "Energy-saving design",
],
    testimonial: {
      text: "Solid ganda ng building ng ARV Construction ",
      author: "Daniel Cobrado",
      avatar: "/daniel.jpg",
    },
  },
  {
    slug: "convention-hall-of-bsp-la-union-branch-office",
    title: "Convention Hall of BSP La Union Branch Office",
    img: "/ConventionHall.jpg",
    address: "La Union Branch, BSP",
    desc: "",
    images: ["/ConventionHall.jpg", "/ConventionHall.jpg", "/ConventionHall.jpg"],
  },
  {
    slug: "construction-of-covered-court",
    title: "Construction of Covered Court",
    img: "/court.jpg",
    address: "San Fernando, La Union",
    desc: "",
    images: ["/court.jpg", "/court.jpg", "/court.jpg"],
  },
  {
    slug: "completion-of-residential-care-facility",
    title: "Completion of Residential Care Facility",
    img: "/ResidentialCare.jpg",
    address: "San Fernando, La Union",
    desc: "",
    images: ["/ResidentialCare.jpg", "/ResidentialCare.jpg", "/ResidentialCare.jpg"],
  },
];

export default function CategoryDetail({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  return (
    <>
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          <div className="flex-1">
            <span className="text-emerald-500 font-semibold text-sm flex items-center gap-2 mb-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
              Properties
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
                  alt={category.title + ' image ' + (idx + 2)}
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Property details section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-lg text-gray-900 font-semibold mb-4">Property details</h2>
              <ul className="space-y-4">
                {category.details?.map((item, idx) => (
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
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-lg text-gray-900 font-semibold mb-4">A Prime Location with Stunning Views</h2>
              <p className="text-gray-700 mb-4">{category.longDesc}</p>
              <h2 className="text-lg text-gray-900 font-semibold mb-4">Exquisite Architectural Design</h2>
              <p className="text-gray-700 mb-4">
This project involves the repainting of interior spaces and various repair works at the Convention Hall of the BSP La Union Branch Office in San Fernando City. The improvements aim to enhance the halls appearance, functionality, and overall condition, ensuring a cleaner, more welcoming, and well-maintained environment for official functions and community use.
</p>

              <h2 className="text-lg font-semibold mb-4">What this property offers</h2>
              <div className="flex flex-wrap gap-3">
                {category.features?.map((feature, idx) => (
                  <span key={idx} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Testimonial card */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
              <p className="text-gray-700 italic">&quot;{category.testimonial?.text}Solid ganda ng building ng ARV Construction  pati Paintings sheshhh&quot;</p>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={category.testimonial?.avatar || "/daniel.jpg"}
                  alt={category.testimonial?.author || "User"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-gray-900">{category.testimonial?.author} Daniel Cobrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 