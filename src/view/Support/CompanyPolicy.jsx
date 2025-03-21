import React from "react";
import { Tabs } from "antd";
// 

const { TabPane } = Tabs;

const CompanyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Chính sách & Quy định</h2>
      <Tabs defaultActiveKey="1" centered>
        
        {/* Chính sách với khách hàng */}
        <TabPane tab={<span className="text-lg font-semibold">Chính sách với khách hàng</span>} key="1">
          <h3 className="text-xl font-semibold mb-2">Quyền lợi & Nghĩa vụ</h3>
          <p style={{ color: "#666" }}>- Khách hàng được hưởng đầy đủ quyền lợi bảo hành, đổi trả theo quy định.Khách hàng có thể đổi trả sản phẩm trong vòng 7 ngày nếu có lỗi từ nhà sản xuất.

              Điều kiện đổi trả: Sản phẩm còn nguyên vẹn, không bị hư hỏng do lỗi người sử dụng.</p>
          <p style={{ color: "#666" }}>Chính sách đổi trả


             Điều kiện đổi trả: Sản phẩm còn nguyên vẹn, không bị hư hỏng do lỗi người sử dụng.</p>   
           <p style={{ color: "#666" }}> Chính sách hỗ trợ kỹ thuật

            Chúng tôi cung cấp dịch vụ tư vấn, cài đặt và hướng dẫn sử dụng sản phẩm miễn phí.

            Hỗ trợ kỹ thuật 24/7 qua điện thoại, email hoặc trực tiếp tại trung tâm dịch vụ.</p> 
          <p style={{ color: "#666" }}>Chính sách giá cả

           Cam kết giá cả cạnh tranh, phù hợp với chất lượng sản phẩm.

           Có chính sách ưu đãi cho khách hàng mua số lượng lớn hoặc ký hợp đồng dài hạn</p>
          <p style={{ color: "#666" }}> Đảm bảo dịch vụ theo yêu cầu khách hàng

          Chúng tôi cung cấp dịch vụ tùy chỉnh theo nhu cầu của từng khách hàng, đảm bảo sản phẩm và dịch vụ phù hợp với đặc thù hoạt động của doanh nghiệp.

          Hỗ trợ thiết kế, cài đặt, nâng cấp và tối ưu hóa phần mềm, thiết bị theo yêu cầu riêng.

          Cam kết đáp ứng nhanh chóng các yêu cầu sửa chữa, bảo trì và thay thế linh kiện khi cần thiết.</p>
          <p style={{ color: "#666" }}>- Thông tin cá nhân của khách hàng được bảo mật và chỉ sử dụng cho mục đích hợp pháp.Mục đích thu thập thông tin cá nhân
          Chúng tôi thu thập thông tin cá nhân của khách hàng nhằm:

           Cung cấp các sản phẩm, dịch vụ và hỗ trợ khách hàng tốt nhất.

           Nâng cao trải nghiệm người dùng và cải thiện chất lượng dịch vụ.

           Đảm bảo tính bảo mật, xác minh danh tính và ngăn chặn các hành vi gian lận.

          Tuân thủ các quy định pháp luật liên quan.

         2. Phạm vi thu thập thông tin
          Các thông tin cá nhân có thể được thu thập bao gồm:
          
          Họ và tên
          
          Số điện thoại
          
          Địa chỉ email
          
          Địa chỉ liên lạc
          
          Các thông tin khác cần thiết theo từng dịch vụ cụ thể
          
          3. Cam kết bảo mật thông tin khách hàng
          
          Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin cá nhân của khách hàng khỏi việc truy cập, sử dụng hoặc tiết lộ trái phép.
          
          Thông tin cá nhân sẽ không được chia sẻ, mua bán hoặc trao đổi với bên thứ ba khi chưa có sự đồng ý của khách hàng, trừ khi có yêu cầu từ cơ quan chức năng theo quy định của pháp luật.
          
          Thời gian lưu trữ thông tin cá nhân chỉ trong khoảng thời gian cần thiết để thực hiện các mục đích đã cam kết.
          
          4. Quyền lợi của khách hàng
          Khách hàng có quyền:
          
          Yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin cá nhân của mình.
          
          Được cung cấp thông tin về việc thu thập và sử dụng dữ liệu cá nhân.
          
          Khiếu nại nếu có bất kỳ hành vi vi phạm nào liên quan đến bảo mật thông tin cá nhân.
          
          Chúng tôi luôn nỗ lực bảo vệ dữ liệu cá nhân của khách hàng và cam kết chỉ sử dụng cho các mục đích hợp pháp nhằm mang đến trải nghiệm tốt nhất cho khách hàng.
          
          </p>
          <p style={{ color: "#666" }}>- Khách hàng có trách nhiệm tuân thủ điều khoản sử dụng dịch vụ.Chúng tôi luôn nỗ lực cung cấp các dịch vụ chất lượng cao, an toàn và minh bạch. Để đảm bảo quyền lợi cho cả hai bên, khách hàng có trách nhiệm tuân thủ các điều khoản sử dụng dịch vụ như sau:

         1. Tuân thủ quy định và pháp luật
         
         Khách hàng cam kết sử dụng dịch vụ đúng mục đích và tuân thủ mọi quy định pháp luật hiện hành.
         
         Không sử dụng dịch vụ cho bất kỳ hoạt động bất hợp pháp, lừa đảo hoặc gây tổn hại đến cá nhân, tổ chức khác.
         
         2. Cung cấp thông tin chính xác
         
         Khách hàng có trách nhiệm cung cấp thông tin đầy đủ, chính xác và cập nhật khi đăng ký và sử dụng dịch vụ.
         
         Nếu phát hiện có sai sót, khách hàng cần nhanh chóng thông báo để được hỗ trợ chỉnh sửa.
         
         3. Bảo mật tài khoản
         
         Khách hàng có trách nhiệm bảo vệ thông tin đăng nhập và không chia sẻ với bên thứ ba.
         
         Nếu có dấu hiệu rò rỉ hoặc sử dụng trái phép tài khoản, khách hàng cần thông báo ngay cho chúng tôi để có biện pháp xử lý kịp thời.
         
         4. Thanh toán và phí dịch vụ
         
         Khách hàng có nghĩa vụ thanh toán đầy đủ và đúng hạn các khoản phí liên quan đến dịch vụ.
         
         Việc chậm thanh toán có thể dẫn đến gián đoạn hoặc tạm ngừng dịch vụ theo quy định.
         
         5. Không xâm phạm quyền lợi của bên khác
         
         Khách hàng không được có hành vi xâm phạm quyền riêng tư, sở hữu trí tuệ hoặc gây ảnh hưởng tiêu cực đến tổ chức, cá nhân khác.
         
         Mọi hành vi vi phạm có thể dẫn đến việc chấm dứt dịch vụ và chịu trách nhiệm theo pháp luật.
         
         6. Chấp nhận các thay đổi về điều khoản
         
         Chúng tôi có quyền thay đổi, điều chỉnh các điều khoản sử dụng dịch vụ để phù hợp với các quy định mới nhất.
         
         Khách hàng có trách nhiệm cập nhật thông tin và tuân thủ các thay đổi được thông báo.
         
         Việc sử dụng dịch vụ của chúng tôi đồng nghĩa với việc khách hàng đã đọc, hiểu và cam kết tuân thủ các điều khoản trên. Mọi vi phạm có thể dẫn đến việc tạm ngưng hoặc chấm dứt dịch vụ mà không cần thông báo trước.
         
         </p>
        </TabPane>

        {/* Chính sách với đối tác */}
        <TabPane tab="Chính sách với đối tác" key="2">
          <h3 className="text-xl font-semibold mb-2">Hợp tác & Trách nhiệm</h3>
          <p style={{ color: "#666" }}>- Các đối tác phải tuân thủ các quy định về hợp tác và thanh toán theo hợp đồng.Chúng tôi luôn đề cao sự minh bạch và chuyên nghiệp trong quá trình hợp tác với các đối tác. Vì vậy, các đối tác có trách nhiệm tuân thủ các quy định về hợp tác và thanh toán theo hợp đồng nhằm đảm bảo quyền lợi của cả hai bên.

            1. Tuân thủ các điều khoản hợp tác
            
            Đối tác phải tuân thủ các điều khoản và điều kiện đã được thống nhất trong hợp đồng.
            
            Cung cấp đầy đủ các dịch vụ hoặc sản phẩm theo đúng tiêu chuẩn chất lượng và tiến độ đã cam kết.
            
            Hợp tác chặt chẽ, trao đổi thông tin kịp thời để đảm bảo quá trình thực hiện diễn ra suôn sẻ.
            
            2. Nghĩa vụ thanh toán
            
            Các khoản thanh toán phải được thực hiện đầy đủ, đúng thời hạn và theo phương thức quy định trong hợp đồng.
            
            Nếu có bất kỳ sự chậm trễ nào trong việc thanh toán, đối tác cần thông báo và làm việc trực tiếp để tìm giải pháp phù hợp.
            
            Trường hợp chậm thanh toán kéo dài, bên vi phạm có thể phải chịu phí phạt hoặc các biện pháp xử lý theo hợp đồng.
            
            3. Bảo mật thông tin hợp tác
            
            Mọi thông tin liên quan đến hợp đồng và hợp tác phải được bảo mật và không được tiết lộ cho bên thứ ba khi chưa có sự đồng ý bằng văn bản.
            
            Vi phạm quy định bảo mật có thể dẫn đến chấm dứt hợp tác và chịu trách nhiệm theo pháp luật.
            
            4. Giải quyết tranh chấp
            
            Trong trường hợp xảy ra tranh chấp, hai bên ưu tiên giải quyết thông qua thương lượng và đàm phán.
            
            Nếu không đạt được thỏa thuận, tranh chấp sẽ được xử lý theo quy định pháp luật hiện hành hoặc cơ chế giải quyết được ghi trong hợp đồng.
            
            Việc ký kết hợp đồng đồng nghĩa với việc các đối tác đã đọc, hiểu và cam kết tuân thủ đầy đủ các quy định trên. Chúng tôi luôn mong muốn xây dựng mối quan hệ hợp tác bền vững, dựa trên sự tin cậy và tôn trọng lẫn nhau.</p>
                      <p style={{ color: "#666" }}>- Cam kết bảo mật thông tin kinh doanh giữa hai bên.Chúng tôi cam kết bảo mật tuyệt đối các thông tin kinh doanh trong quá trình hợp tác giữa hai bên. Việc thu thập, sử dụng và lưu trữ thông tin đều tuân thủ các quy định pháp luật nhằm đảm bảo lợi ích của cả hai phía.

                   1. Phạm vi thông tin được bảo mật
                   
                   Tất cả các dữ liệu liên quan đến chiến lược kinh doanh, tài chính, khách hàng, sản phẩm, dịch vụ và các thông tin nội bộ khác.
                   
                   Các tài liệu, hợp đồng, báo cáo, kế hoạch phát triển, công nghệ và các nội dung trao đổi trong quá trình hợp tác.
                   
                   2. Nghĩa vụ bảo mật của các bên
                   
                   Không tiết lộ, chia sẻ hoặc cung cấp thông tin kinh doanh của bên kia cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý bằng văn bản.
                   
                   Sử dụng thông tin chỉ với mục đích thực hiện hợp tác theo thỏa thuận, không dùng vào bất kỳ mục đích cá nhân hay lợi ích riêng nào.
                   
                   Áp dụng các biện pháp bảo vệ an toàn dữ liệu nhằm ngăn chặn việc rò rỉ, đánh cắp hoặc truy cập trái phép.
                   
                   3. Thời hạn bảo mật
                   
                   Nghĩa vụ bảo mật có hiệu lực ngay khi hai bên ký kết thỏa thuận hợp tác và vẫn có hiệu lực ngay cả khi hợp tác kết thúc.
                   
                   Thời gian bảo mật có thể được điều chỉnh theo thỏa thuận riêng giữa hai bên.
                   
                   4. Hình thức xử lý vi phạm
                   
                   Bên vi phạm cam kết chịu trách nhiệm bồi thường thiệt hại do việc tiết lộ hoặc sử dụng trái phép thông tin gây ra.
                   
                   Các hành vi vi phạm có thể dẫn đến chấm dứt hợp tác ngay lập tức và xử lý theo quy định pháp luật.
                   
                   5. Điều khoản bổ sung
                   
                   Mọi điều chỉnh, sửa đổi về quy định bảo mật phải có sự thống nhất và được lập thành văn bản giữa hai bên.
                   
                   Trường hợp xảy ra tranh chấp, hai bên ưu tiên giải quyết thông qua đàm phán trước khi đưa ra cơ quan có thẩm quyền.
                   
                   Việc ký kết hợp đồng hoặc thỏa thuận hợp tác đồng nghĩa với việc hai bên cam kết tuân thủ nghiêm ngặt các điều khoản bảo mật trên nhằm bảo vệ lợi ích chung và duy trì sự tin cậy trong quan hệ hợp tác.
                   
                   </p>
                      <p style={{ color: '#666' }}>- Hợp tác đôi bên cùng có lợi dựa trên thỏa thuận hợp pháp.
                      Hợp tác giữa các bên được xây dựng trên nguyên tắc minh bạch, công bằng và đảm bảo lợi ích chung. Mọi thỏa thuận đều tuân thủ pháp luật hiện hành, góp phần thúc đẩy sự phát triển bền vững và lâu dài.

                     1. Nguyên tắc hợp tác
                     
                     Hai bên cam kết hợp tác trên cơ sở bình đẳng, tôn trọng lẫn nhau và cùng có lợi.
                     
                     Mọi hoạt động hợp tác đều phải phù hợp với các quy định pháp luật, đảm bảo tính hợp pháp và chính đáng.
                     
                     Hai bên cùng nỗ lực để đạt được mục tiêu chung, đồng thời hỗ trợ nhau trong quá trình thực hiện thỏa thuận.
                     
                     2. Trách nhiệm của các bên
                     
                     Cung cấp đầy đủ và chính xác các thông tin cần thiết nhằm đảm bảo sự minh bạch trong hợp tác.
                     
                     Tuân thủ các cam kết trong thỏa thuận, bao gồm tiến độ, chất lượng và các điều khoản đã thống nhất.
                     
                     Hỗ trợ nhau trong việc giải quyết khó khăn phát sinh nhằm đảm bảo hiệu quả hợp tác.
                     
                     3. Nghĩa vụ tài chính và thanh toán
                     
                     Mọi giao dịch tài chính giữa hai bên phải được thực hiện đúng hạn và theo phương thức quy định trong hợp đồng.
                     
                     Nếu có thay đổi hoặc phát sinh chi phí, hai bên cần thống nhất bằng văn bản trước khi thực hiện.
                     
                     Tránh tình trạng chậm thanh toán hoặc vi phạm các cam kết tài chính làm ảnh hưởng đến hợp tác.
                     
                     4. Giải quyết tranh chấp
                     
                     Trường hợp xảy ra tranh chấp, hai bên ưu tiên giải quyết bằng thương lượng để đạt được sự đồng thuận.
                     
                     Nếu không thể thỏa thuận, tranh chấp sẽ được giải quyết theo quy định pháp luật hoặc thông qua trọng tài kinh tế.
                     
                     5. Bảo mật thông tin
                     
                     Hai bên cam kết bảo mật thông tin liên quan đến hợp tác và không tiết lộ cho bên thứ ba nếu không có sự đồng ý của đối phương.
                     
                     Việc vi phạm bảo mật có thể dẫn đến chấm dứt hợp tác và chịu trách nhiệm bồi thường theo hợp đồng.
                     
                     6. Hiệu lực và điều chỉnh thỏa thuận
                     
                     Thỏa thuận hợp tác có hiệu lực kể từ ngày ký kết và kéo dài theo thời hạn đã quy định.
                     
                     Mọi điều chỉnh, sửa đổi phải có sự thống nhất bằng văn bản giữa hai bên.
                     
                     Sự hợp tác trên tinh thần đôi bên cùng có lợi không chỉ mang lại giá trị kinh tế mà còn giúp xây dựng mối quan hệ bền vững. Chúng tôi cam kết thực hiện nghiêm túc các điều khoản để đảm bảo thành công cho cả hai bên.
                     
                     
                      </p>
        </TabPane>

      </Tabs>
    </div>
  );
};

export default CompanyPolicy;
