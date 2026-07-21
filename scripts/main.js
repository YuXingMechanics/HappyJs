// 快乐学习乐园 - 主交互脚本
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // 为卡片添加点击效果
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是按钮，不触发卡片点击效果
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            // 找到卡片内的链接
            const link = this.querySelector('a.card-button');
            if (link && link.href && !link.href.includes('#')) {
                // 添加点击反馈
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // 模拟延迟后跳转（让用户看到反馈）
                setTimeout(() => {
                    window.location.href = link.href;
                }, 200);
            }
        });
    });
    
    // 添加一些动态效果
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        header.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 滚动动画效果 - 当分类标题进入视口时添加动画
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // 观察所有分类标题
        const categoryTitles = document.querySelectorAll('.category-title');
        categoryTitles.forEach(title => {
            observer.observe(title);
        });
    } else {
        // 如果不支持IntersectionObserver，直接显示所有标题
        const categoryTitles = document.querySelectorAll('.category-title');
        categoryTitles.forEach(title => {
            title.classList.add('animate-in');
        });
    }
    
    // 控制台欢迎信息
    console.log('%c🎉 欢迎来到快乐学习乐园！', 'color: #6a5acd; font-size: 18px; font-weight: bold;');
    console.log('%c这里是孩子们探索、学习和创造的地方！', 'color: #4ecdc4; font-size: 14px;');
    console.log('%c滚动页面浏览所有分类项目，点击卡片开始探索！', 'color: #ff6b6b; font-size: 12px;');
});