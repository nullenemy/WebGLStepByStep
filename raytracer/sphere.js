class Sphere {
    constructor(center, radius, color) {
        this.center = center;
        this.radius = radius;
        this.color = color;
    }

    hit(ray, tMin, tMax) {
        var oc = ray.origin.sub(this.center);
        var k1 = ray.direction.dot(ray.direction);
        var k2 = 2 * oc.dot(ray.direction);
        var k3 = oc.dot(oc) - this.radius * this.radius;

        var discriminant = k2 * k2 - 4 * k1 * k3;

        if (discriminant < 0) {
            return null;
        }
        var temp = (-k2 + Math.sqrt(discriminant)) / (2 * k1);
        // var t2 = (-k2 - Math.sqrt(discriminant)) / (2 * k1);
        if (tMin < temp && temp < tMax) {
            var t = temp;
            var point = ray.pointAt(t);
            var normal = (point - this.center) / this.radius;
            return new HitRecord(this, t, point, normal);
        }
    }
}