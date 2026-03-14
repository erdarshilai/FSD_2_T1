const a = {
    "A": "LJU",
    "B": ["CSE", "IT", "CE"],
    "C": [{ "D": "Hi", "E": ["are", 4, { "f": ["semester", "we"] }] }],
    "G": { "H": "Students", "I": ["of", "!"] },
    "J": [{ "K": "python", "L": "branch" }, "FSD-2"]
    
}
console.log(a.C[0].D + " " + a.G.I[1] +" "+ a.C[0].E[2].f[1] +" "+ a.C[0].E[0] +" "+ a.G.H +" "+ a.G.I[0] +" "+ a.C[0].E[2].f[0] +" "+ a.C[0].E[1] +" "+ a.G.I[0] +" "+ a.B[0] +" "+ a.J[0].L);
