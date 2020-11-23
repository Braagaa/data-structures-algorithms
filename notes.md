### DSA

## Order of Growth

Direct Way

1. Ignore lower terms
2. Ignore leading constants

Commonly seen terms in order of efficentcy:

C < loglog n < log n < n^1/3 < n^1/2 < n < n^2 < n^3 < n^4 < 2^n < n^n

## Big O Notation

Covers the upper bound and lower bounds: worst case, average case, best case

Direct Way of finding c:
- Take the constant on the highest leading term and add 1

## Omega Notation

Covers the lowerbound

## Analysis of Common Loops

for (int i = n, i < n; i = i + c) { 
	//some constant work
}

n / c = n

for (int i = n, i > 0; i = i - c) { 
	//some constant work
}

n / c = n

for (int i = 1, i < n; i = i * c) { 
	//some constant work
}

1, C, C^2, c^3 ...C^K-1
c^K-1 < n
k-1 < logcn
K < logcn + 1

log n

for (int i = n; i > 1; i = i / c) { 
	//some constant work
}

opposite of prev loop

log n

for (int i = 2; i < n; i = pow(i, c)) { 
	//some constant work
}

2, 2^c, (2^c)^c, ...
2, 2^c, 2^c^2, ... 2^c^k-1
2^c^k-1 < n

c^k-1 < log(2)n
k-1 < log(c)log(2)n
k < log(c)log(2)n + 1

loglogn

void fun(int n) { 
	for (int i = 0; i < n; i++) { 
		//some constant work
	}
	// n

	for (int i = 1; i < n; i * 2) { 
		//some constant work
	}
	// logn

	for (int i = 1; i < 100; i++) { 
		//some constant work
	}
	// 1
}

(-)(n) + (-)(logn) + (-)(1) -> ignore lower terms
(-)(n)

void fun(int n) { 
	for (int i = 0; i < n; i++) { 
		for (int j = 1; j < n; j = j * 2) { 
			//some constant work
		}
	}
}

(-)(n) * (-)(logn)
(-)(n * logn)


void fun(int n) { 
	for (int i = 0; i < n; i++) { 
		for (int j = 1; j < n; j = j * 2) { 
			//some constant work
		}
	}
	//(-)(nlogn)

	for (int i = 0; i < n; i++) { 
		for (int j = 1; j < n; j = j++) { 
			//some constant work
		}
	}
	//(-)(n^2)
}

(-)(nlogn) + (-)(n^2)
(-)(n^2)

## Analysis of Recursion

### Recursion Tree Method

1. We work non-recursive part as root of tree and recursive parts as children
2. We keep expanding children until we see a bottom

void fun(int n) { 
	if (n <= 1) return;
	
	for (int i = 0; i < n; i++) { 
		print("afa");
	}

	fun(n/2);
	fun(n/2);
}

T(n) = 2T(n/2) + (-)(n)
T(1) = c
