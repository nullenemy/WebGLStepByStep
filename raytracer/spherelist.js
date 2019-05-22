class SphereList {
    constructor(spheres) {
        this.spheres = spheres;
    }

    hit(ray, tMin, tMax) {
        var tempRec = null;
        var hitAnything = false;
        var closestSoFar = tMax;
        var rec = null;
        for (var i = 0; i < this.spheres.length; i++) {
            tempRec = this.spheres[i].hit(ray, tMin, closestSoFar)
            if (tempRec != null) {
                hitAnything = true;
                closestSoFar = tempRec.t;
                rec = tempRec;
            }
        }

        if (!hitAnything) {
            return null;
        } else {
            return rec;
        }
    }
}