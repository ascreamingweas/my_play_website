name := "my_play_website"

version := "1.0"

scalaVersion := "2.11.7"

lazy val root = (project in file(".")).enablePlugins(PlayJava, SbtWeb)

libraryDependencies ++= Seq(
  cache,
  filters,
  javaCore,
  javaJdbc,
  javaWs
)

pipelineStages := Seq(uglify, digest, gzip)
