import React from 'react';
import './projectssection.css';

const projects = [
  {
    id: 1,
    title: " Cảnh Báo Chặt Phá Rừng.",
    description: "Sử dụng công nghệ AI cảnh báo chặt phá rừng.",
    imgSrc: process.env.PUBLIC_URL + "/imges-projection/canh-bao-chat-pha-rung-3-1559.jpg"
  },
  {
    id: 2,
    title: "Cảnh Báo Cháy Rừng",
    description: "Sử dụng công nghệ AI cảnh báo nguy cơ cháy rừng.",
     imgSrc: `${process.env.PUBLIC_URL}/imges-projection/chay-rung_biendoikhihau.jpg`
  },
  {
    id: 3,
    title: "Môi Trường Xanh",
    description: "Trồng cây nơi đất cát có nguy cơ sạt nở ven sông, ven đường.",
    imgSrc: process.env.PUBLIC_URL + "/imges-projection/lien-ket-cay-trong-xanh.jpg"
  }
];
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Dự án & Giải pháp nổi bật</h2>
        <div className="row">
          {projects.map(project => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card">
                <img src={project.imgSrc} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-primary">Xem chi tiết</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 