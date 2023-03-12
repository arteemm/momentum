import playList from '../data/playList';

const playListContainer = document.querySelector('.play-list');

 const viewPlayList = () => {
  playList.forEach((item, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('play-item');
    span.classList.add('item-play');
    li.textContent = playList[index].title;
    playListContainer.append(li);
    li.append(span);
  });
};

export default viewPlayList;