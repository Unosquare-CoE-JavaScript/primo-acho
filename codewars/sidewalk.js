//determines your final position whether you move north west, south, and east

function isValidWalk(walk) {
    const minutes = 10
    if( walk.length ===minutes) {
        let pos = {
            x: 0,
            y: 0
        }
        for(let i = 0;i<minutes;i++) {
            switch (walk[i]) {
                case 'n':
                    pos.y++;
                    break;
                case 'e':
                    pos.x++;
                    break;
                case 's':
                    pos.y--;
                    break;
                case 'w':
                    pos.x--;
                    break;
                default:
                    break;
            }
        }
        return pos.x==0 && pos.y==0
    }
    return false;
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));