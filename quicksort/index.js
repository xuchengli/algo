const log4js = require('log4js');
const logger = log4js.getLogger('quick sort');
logger.level = 'debug';

const arr = [8, 3, 10, 2, 7, 6, 9, 12];
logger.info('起始数组:', JSON.stringify(arr));

function sort(arr, start, end) {
  if (start >= end) return;

  let direction = 'right';
  let left_index = start, right_index = end;

  while (left_index < right_index) {
    if (direction === 'right') {
      if (arr[right_index] >= arr[left_index]) right_index--;
      else {
        // 交换并改变方向
        [ arr[left_index], arr[right_index] ] = [ arr[right_index], arr[left_index] ];
        direction = 'left';
      }
    } else {
      if (arr[left_index] <= arr[right_index]) left_index++;
      else {
        // 交换并改变方向
        [ arr[left_index], arr[right_index] ] = [ arr[right_index], arr[left_index] ];
        direction = 'right';
      }
    }
  }
  sort(arr, start, left_index - 1);
  sort(arr, left_index + 1, end);
}

sort(arr, 0, arr.length - 1);

logger.info('快速排序后数组:', JSON.stringify(arr));
