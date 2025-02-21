import React from 'react';
import './projectssection.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Dự án tiêu biểu</h2>
        <div className="row">
          {/* Danh mục dự án */}
          <div className="col-md-6">
            <h4>Danh mục dự án</h4>
            <p>Trưng bày các dự án đã thực hiện, kèm theo hình ảnh, báo cáo và kết quả đạt được.</p>
          </div>
          {/* Case Studies */}
          <div className="col-md-6">
            <h4>Case Studies</h4>
            <p>Các bài học kinh nghiệm và minh họa chi tiết về quy trình thực hiện dự án.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
