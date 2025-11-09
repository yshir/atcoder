#![allow(non_snake_case)]

use proconio::input;

fn main() {
    input! {
        N: i128,
    }

    for d in 1.. {
        if d * d * d > N {
            break;
        }

        let a = 3 * d;
        let b = 3 * d * d;
        let c = d.pow(3) - N;

        let disc = b.pow(2) - 4 * a * c;
        if (disc as f64).sqrt().fract() != 0.0 {
            continue;
        }

        let numerator = (disc as f64).sqrt() as i128 - b;
        if numerator % (2 * a) != 0 {
            continue;
        }

        let y = numerator / (2 * a);
        if y == 0 {
            continue;
        }

        let x = d + y;
        println!("{} {}", x, y);
        return;
    }
    println!("{}", -1);
}
