import React from 'react';
import './projectssection.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Dự án & Giải pháp nổi bật</h2>
        <div className="row">
          {/* Card dự án 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/imges/chuyen-doi-so-tnmt.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Dự án 1</h5>
                <p className="card-text">Mô tả ngắn về dự án hoặc giải pháp.</p>
                <a href="#" className="btn btn-primary">Xem chi tiết</a>
              </div>
            </div>
          </div>  
          {/* Card dự án 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/imges/moi-truong-xanh.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Dự án 2</h5>
                <p className="card-text">Mô tả ngắn về dự án hoặc giải pháp.</p>
                <a href="#" className="btn btn-primary">Xem chi tiết</a>
              </div>
            </div>
          </div>
          {/* Card dự án 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/imges/Quan-ly-tnmtjpg.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Dự án 3</h5>
                <p className="card-text">Mô tả ngắn về dự án hoặc giải pháp.</p>
                <a href="#" className="btn btn-primary">Xem chi tiết</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
