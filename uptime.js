// 起始日期（年-月-日）
const startDate = new Date('2025-11-08');

// 更新时间显示的函数
function updateUptime() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('uptime').textContent = 
        `${days}天${hours}时${minutes}分${seconds}秒`;
}

// 初始加载时更新时间
updateUptime();

// 每秒更新一次时间
setInterval(updateUptime, 1000);
