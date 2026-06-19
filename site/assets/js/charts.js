document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    createRevenueChart();
    createFunnelChart();
    createChannelChart();
    createTeamPerformanceChart();
  }, 500);
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetPage = item.dataset.nav;
      if (targetPage === 'relatorios') {
        setTimeout(() => {
          createSalesPerformanceChart();
          createLeadSourceChart();
        }, 300);
      }
    });
  });
});

function createRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;

  const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
  gradient1.addColorStop(1, 'rgba(99, 102, 241, 0.1)');

  const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
  gradient2.addColorStop(1, 'rgba(139, 92, 246, 0.1)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Receita Atual',
          data: [65000, 78000, 85000, 95000, 110000, 125000],
          borderColor: '#6366f1',
          backgroundColor: gradient1,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#6366f1',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#6366f1',
          pointHoverBorderWidth: 3
        },
        {
          label: 'Receita Anterior',
          data: [55000, 62000, 68000, 75000, 82000, 90000],
          borderColor: '#8b5cf6',
          backgroundColor: gradient2,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#8b5cf6',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#8b5cf6',
          pointHoverBorderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#cbd5e1',
            padding: 20,
            font: {
              size: 12,
              weight: '600'
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: '#cbd5e1',
          borderColor: '#6366f1',
          borderWidth: 1,
          padding: 12,
          displayColors: true,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += 'R$ ' + context.parsed.y.toLocaleString('pt-BR');
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            },
            callback: function(value) {
              return 'R$ ' + (value / 1000) + 'k';
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            }
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createFunnelChart() {
  const ctx = document.getElementById('funnelChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Visitantes', 'Leads', 'Qualificados', 'Propostas', 'Fechados'],
      datasets: [{
        label: 'Quantidade',
        data: [5420, 3250, 1840, 890, 560],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderColor: [
          '#6366f1',
          '#8b5cf6',
          '#3b82f6',
          '#10b981',
          '#f59e0b'
        ],
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 40
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: '#cbd5e1',
          borderColor: '#6366f1',
          borderWidth: 1,
          padding: 12
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            }
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: '#cbd5e1',
            font: {
              size: 12,
              weight: '600'
            }
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createChannelChart() {
  const ctx = document.getElementById('channelChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['WhatsApp', 'Instagram', 'Google', 'Facebook', 'Indicação'],
      datasets: [{
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          'rgba(37, 211, 102, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: [
          '#25d366',
          '#f59e0b',
          '#3b82f6',
          '#6366f1',
          '#8b5cf6'
        ],
        borderWidth: 2,
        hoverOffset: 15
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#cbd5e1',
            padding: 15,
            font: {
              size: 11,
              weight: '600'
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: '#cbd5e1',
          borderColor: '#6366f1',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += context.parsed + '%';
              }
              return label;
            }
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}
