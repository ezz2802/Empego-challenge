type Grid = string[][];

function calculateTotalPrice(grid: Grid): number {
    let totalPrice = 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited: boolean[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1],  // right
    ];

    function bfs(startR: number, startC: number): number {
        const queue: [number, number][] = [[startR, startC]];
        visited[startR][startC] = true;
        const letter = grid[startR][startC];
        let area = 0;
        let perimeter = 0;

        while (queue.length > 0) {
            const [r, c] = queue.shift()!;
            area++;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                    if (grid[nr][nc] === letter) {
                        if (!visited[nr][nc]) {
                            visited[nr][nc] = true;
                            queue.push([nr, nc]);
                        }
                    } else {
                        perimeter++;
                    }
                } else {
                    perimeter++;
                }
            }
        }

        return area * perimeter;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c]) {
                totalPrice += bfs(r, c);
            }
        }
    }

    return totalPrice;
}

export { calculateTotalPrice };
