class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }

    pointAt(t) {
        return this.origin + this.direction.multiply(t);
    }

    hitSphere(sphere) {
        var oc = this.origin.sub(sphere.center);
        var k1 = this.direction.dot(this.direction);
        var k2 = 2 * oc.dot(this.direction);
        var k3 = oc.dot(oc) - sphere.radius * sphere.radius;

        var discriminant = k2 * k2 - 4 * k1 * k3;
        // console.log(discriminant)
        if (discriminant < 0) {
            return [Infinity, Infinity];
        }

        var t1 = (-k2 + Math.sqrt(discriminant)) / (2 * k1);
        var t2 = (-k2 - Math.sqrt(discriminant)) / (2 * k1);
        return [t1, t2];
    }
}