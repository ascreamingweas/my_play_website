// The Typesafe repository
resolvers += "Typesafe repository" at "https://repo.typesafe.com/typesafe/maven-releases/"
// Typesafe snapshots
resolvers += "Typesafe Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"

// play sbt plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.5.10")

// web plugins
addSbtPlugin("com.typesafe.sbt" % "sbt-coffeescript" % "1.0.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-digest" % "1.1.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-gzip" % "1.0.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.1.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-mocha" % "1.1.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-rjs" % "1.0.8")
addSbtPlugin("com.typesafe.sbt" % "sbt-uglify" % "1.0.3")

// SBT SASS plugin
resolvers += Resolver.url("GitHub repository", url("http://shaggyyeti.github.io/releases"))(Resolver.ivyStylePatterns)
addSbtPlugin("default" % "sbt-sass" % "0.1.9")
