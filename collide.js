function collide(l, r) {
    rightEdge = l.x + l.width;
    leftEdge = r.x;
    if(rightEdge >= leftEdge){
        return true
    }
    else{
        return false
    }
}