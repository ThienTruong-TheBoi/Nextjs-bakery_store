import '@/app/noti/id01/noti.css';
import Image from 'next/image';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
const nid02 = () => {
    return (
    <div className="main">
        <AppHeader></AppHeader>

        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <AppCategory></AppCategory>
                    
                    <div className="grid__column-10">
                        <div className="noti-wrap">
        

                            

                                <div className="noti__img">
                                    <Image src="https://vcdn1-suckhoe.vnecdn.net/2019/10/15/viet-ngu-coc-1-4527-1571117472.png?w=0&h=0&q=100&dpr=2&fit=crop&s=gUZlB_llL4l54qri9vsWaQ" width={350} height={350} alt="" className="noti-img"/>
                                </div>

                                <div className="noti-detail">
                                    <h3 className="noti_title">
                                    Bánh cookie yến mạch “healthy” – Công dụng và cách làm bánh
                                    </h3>

                                    <div className="noti__content">
                                        <p className="noti-para"> Bánh cookies yến mạch là một loại bánh thơm ngon, nhiều dinh dưỡng và rất tốt cho sức khỏe. Bữa sáng với ít bánh yến mạch kèm ly sữa là bạn đã có đủ dưỡng chất và nguồn năng lượng để bắt đầu ngày mới. Bên cạnh việc sử dụng cho bữa sáng, bánh cookies yến mạch còn được dùng như món ăn vặt, món ăn xế chiều cho các chị em, vô cùng thơm ngon và tiện lợi.Bánh cookies yến mạch là một trong những món bánh xếp vào nhóm bánh yến mạch giảm cân mà không chỉ có những người có nhu cầu giảm cân mới ăn loại bánh này. Mà tất cả mọi người từ người lớn đến trẻ nhỏ đều có thể thưởng thức. Vì bột yến mạch chứa nguồn dinh dưỡng phong phú, chính vì vậy ăn món bánh cookies này sẽ cung cấp cho cơ thể chúng ta nguồn dinh dưỡng dồi dào. Tuy nhiên, với bạn nào mới bắt đầu ăn kiêng thì sẽ thấy vị của yến mạch có thể hơi khó ăn một chút, hoặc không ngọt bằng các loại bánh khác. </p>
                                        <p className="noti-para"> Bánh cookies yến mạch là một loại bánh thơm ngon, nhiều dinh dưỡng và rất tốt cho sức khỏe. Bữa sáng với ít bánh yến mạch kèm ly sữa là bạn đã có đủ dưỡng chất và nguồn năng lượng để bắt đầu ngày mới. Bên cạnh việc sử dụng cho bữa sáng, bánh cookies yến mạch còn được dùng như món ăn vặt, món ăn xế chiều cho các chị em, vô cùng thơm ngon và tiện lợi.Bánh cookies yến mạch là một trong những món bánh xếp vào nhóm bánh yến mạch giảm cân mà không chỉ có những người có nhu cầu giảm cân mới ăn loại bánh này. Mà tất cả mọi người từ người lớn đến trẻ nhỏ đều có thể thưởng thức. Vì bột yến mạch chứa nguồn dinh dưỡng phong phú, chính vì vậy ăn món bánh cookies này sẽ cung cấp cho cơ thể chúng ta nguồn dinh dưỡng dồi dào. Tuy nhiên, với bạn nào mới bắt đầu ăn kiêng thì sẽ thấy vị của yến mạch có thể hơi khó ăn một chút, hoặc không ngọt bằng các loại bánh khác. </p>
                                    </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <AppFooter></AppFooter>

    </div>

    )

}

export default nid02;