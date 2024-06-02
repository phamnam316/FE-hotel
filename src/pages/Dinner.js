import React from 'react';
import ContentCard from '../components/common/ContentDinner';
import backgroundImage from '../images/dinner1.jpg';
import overlayImage from '../images/dinner-2.jpg';
import backgroundImage2 from '../images/bar.jpg';
import overlayImage2 from '../images/barr.jpg';
import backgroundImage3 from '../images/dinner3.jpg';
import overlayImage3 from '../images/dinner4.jpg';

const Dinner = () => {

    return (
        <div className="Dinner">
            <ContentCard 
                title={"NHÀ HÀNG BACARO"} 
                content={"Nhìn ra mặt nước lấp lánh của vịnh Nha Trang, nhà hàng Bacaro phục vụ các món ăn kinh điển quốc tế và các món đặc trưng mang đậm hương vị truyền thống từ 3 vùng miền Việt Nam, kết hợp với dịch vụ mộc mạc mà chu đáo từ đội ngũ nhân viên thân thiện. Chúng tôi tự hào sẽ mang lại các bữa ăn tốt nhất Việt Nam, cùng với các loại rượu hảo hạng được tuyển chọn kỹ lưỡng."} 
                backgroundImage={backgroundImage} 
                overlayImage={overlayImage} 
            />
            <ContentCard 
                title={"LOBBY BAR"} 
                content={"Lobby Bar phục vụ các loại rượu vang được tuyển chọn công phu, các loại whisky lâu năm, cũng như các loại cocktail ngon và đầy sáng tạo."} 
                backgroundImage={backgroundImage2} 
                overlayImage={overlayImage2} 
                reverse
            />
            <ContentCard 
                title={"TRẢI NGHIỆM ẨM THỰC ĐIỂM ĐẾN"} 
                content={"Hãy thêm hương vị cho kỳ nghỉ của bạn với trải nghiệm ẩm thực tại một trong nhiều những địa điểm riêng tư tại Amiana. Đầu bếp và nhân viên phục vụ riêng sẽ mang đến bữa ăn hải sản nướng trên vịnh biển, đi chân trần trên bãi cát riêng tư và nghe tiếng sóng vỗ, hoặc trên cầu cảng tách biệt với thế giới bên ngoài, với ánh sáng từ thành phố bắt đầu lên đèn ở phía khơi xa bên kia vịnh, trong ánh hoàng hôn dần buông trên mặt nước lấp lánh."} 
                backgroundImage={backgroundImage3} 
                overlayImage={overlayImage3} 
            />

        
        </div>
    );
}

export default Dinner;
