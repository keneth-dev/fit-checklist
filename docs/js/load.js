const clickAchievement = (e) => {
  if (e.currentTarget.classList.contains('checked')) {
    localStorage.removeItem(e.currentTarget.dataset.id);
  } else {
    localStorage.setItem(e.currentTarget.dataset.id, 'yes');
  }

  e.currentTarget.classList.toggle('checked');
}

document.addEventListener('DOMContentLoaded', () => {
  const achievements = document.getElementsByClassName('achievement');

  for (const achievement of achievements) {
    achievement.addEventListener('click', clickAchievement, false);

    if (localStorage.getItem(achievement.dataset.id)) {
      achievement.classList.add('checked');
    }
  }
}, false);