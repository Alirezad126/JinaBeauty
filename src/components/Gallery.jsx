export default function Gallery() {
    const works = [
      { image: '/work1.jpg', caption: 'Soft glam makeup' },
      { image: '/work2.jpg', caption: 'Wedding updo' },
      { image: '/work3.jpg', caption: 'Bridal brows' },
    ];
  
    return (
      <section id="gallery" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10">
            Recent Work
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            A few examples of the transformations I’ve created — from event-ready looks to everyday elegance.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {works.map((work, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={work.image}
                  alt={work.caption}
                  className="w-full h-[350px] object-cover rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-700 font-serif text-sm">{work.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  