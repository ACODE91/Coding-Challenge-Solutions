// // Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

// postTweet(userId, tweetId): Compose a new tweet.
// getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
// follow(followerId, followeeId): Follower follows a followee.
// unfollow(followerId, followeeId): Follower unfollows a followee.
// Example:

// Twitter twitter = new Twitter();

// // User 1 posts a new tweet (id = 5).
// twitter.postTweet(1, 5);

// // User 1's news feed should return a list with 1 tweet id -> [5].
// twitter.getNewsFeed(1);

// // User 1 follows user 2.
// twitter.follow(1, 2);

// // User 2 posts a new tweet (id = 6).
// twitter.postTweet(2, 6);

// // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.getNewsFeed(1);

// // User 1 unfollows user 2.
// twitter.unfollow(1, 2);

// // User 1's news feed should return a list with 1 tweet id -> [5],
// // since user 1 is no longer following user 2.
// twitter.getNewsFeed(1);

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.users = {};  
};

var DoubleLinkedList = function(value) {
    this.prevNode = null;
    this.nextNode = null;
    this.tail = null;
    this.head = this;
    this.value = value;
    this.length = 1;
}

DoubleLinkedList.prototype.addNode = function(value) {
    let previousTail = this.tail;
    this.tail = new DoubleLinkedList(value);
    this.tail.prevNode = previousTail;
    previousTail.nextNode = this.tail;
    this.length++;
}

DoubleLinkedList.prototype.findNode = function(targetValue) {
    let traverse = function(node) {
        if(!node.nextNode) {
            return null;
        } 
        node.findNode(node.nextNode);
    }

    if(this.value === targetValue) {
        return this;
    } else {
        traverse(this);
    }
}

var User = function(id) {
this.userId = id;
this.following = undefined;
this.tweets = null;
this.feed = null
}


/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.users[userId]) {
        this.users[userId] = new User(userId);
    }

    let user = this.users[userId];

    if(!user.tweets) {
        user.tweets = new DoubleLinkedList(tweetId);
    } else {
        user.tweets.addNode(tweetId);
    }

    if(!user.feed) {
        user.feed = new DoubleLinkedList(tweetId); 

    } else {
        user.feed.addNode(tweetId);
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let topTenTweets = [];
    let user = this.users[userId];
    let mostRecentNode = user[feed].tail;

    if(user[feed].length < 10) {
        while(mostRecentNode.prevNode !== null) {
            topTenTweets.push(mostRecentNode.value);
            mostRecentNode = mostRecentNode.prevNode;
        }
    } else if(user[feed].length > 10) {
        let count = 0;
        while(count < 10) {
            topTenTweets.push(mostRecentNode.value);
            mostRecentNode = mostRecentNode.prevNode;
            count++;
        }
    }
    return topTenTweets;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
      
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */