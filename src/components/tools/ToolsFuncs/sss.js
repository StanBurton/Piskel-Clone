            switch(penWidth){
                case 1:
                    matrix[x][y] = curColor;
                break;
                case 2:
                    matrix[x][y] = curColor;
                    matrix[x][y-1] = curColor;
                    matrix[x-1][y] = curColor;
                    matrix[x-1][y-1] = curColor;
                break;
                case 3:
                    matrix[x][y] = curColor;
                    matrix[x][y+1] = curColor;
                    matrix[x][y-1] = curColor;
                    matrix[x-1][y] = curColor;
                    matrix[x-1][y+1] = curColor;
                    matrix[x-1][y-1] = curColor;
                    matrix[x+1][y] = curColor;
                    matrix[x+1][y+1] = curColor;
                    matrix[x+1][y-1] = curColor;
                break;
                case 4:
                    matrix[x][y] = curColor;
                    matrix[x][y+1] = curColor;
                    matrix[x][y-1] = curColor;
                    matrix[x][y-2] = curColor;
                    matrix[x+1][y] = curColor;
                    matrix[x+1][y+1] = curColor;
                    matrix[x+1][y-1] = curColor;
                    matrix[x+1][y-2] = curColor;
                    matrix[x-1][y] = curColor;
                    matrix[x-1][y+1] = curColor;
                    matrix[x-1][y-1] = curColor;
                    matrix[x-1][y-2] = curColor;
                    matrix[x-2][y] = curColor;
                    matrix[x-2][y+1] = curColor;
                    matrix[x-2][y-1] = curColor;
                    matrix[x-2][y-2] = curColor;
                break;               
            }