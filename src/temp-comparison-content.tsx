            <TabsContent value="compare" className="mt-0">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl mb-2">Compare AI Tools</h3>
                    <p className="text-gray-600">Select tools to compare side by side</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-500">
                      {selectedTools.length} tools selected
                    </div>
                    {selectedTools.length >= 2 && (
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Advanced Comparison
                      </Button>
                    )}
                  </div>
                </div>

                {selectedTools.length === 0 ? (
                  <Card className="p-12 text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg mb-2">No tools selected</h4>
                    <p className="text-gray-600 mb-6">
                      Choose tools from the Explore section to start comparing
                    </p>
                    <Button 
                      className="bg-black text-white hover:bg-gray-800"
                      onClick={() => setActiveTab('explore')}
                    >
                      Browse Tools
                    </Button>
                  </Card>
                ) : selectedTools.length < 2 ? (
                  <Card className="p-12 text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg mb-2">Select more tools to compare</h4>
                    <p className="text-gray-600 mb-6">
                      You need at least 2 tools selected to start comparison
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button 
                        className="bg-black text-white hover:bg-gray-800"
                        onClick={() => setActiveTab('explore')}
                      >
                        Browse More Tools
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                        disabled={selectedTools.length < 2}
                      >
                        Advanced Comparison
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <div className="space-y-8">
                    {/* Quick Comparison Table */}
                    <Card>
                      <CardHeader>
                        <h4 className="text-lg">Quick Comparison</h4>
                      </CardHeader>
                      <CardContent className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-40">Tool</TableHead>
                              <TableHead>Rating</TableHead>
                              <TableHead>Pricing</TableHead>
                              <TableHead>Speed</TableHead>
                              <TableHead>Free Version</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedToolsData.map((tool) => (
                              <TableRow key={tool.id}>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <span className="text-2xl">{tool.logo}</span>
                                    <div>
                                      <div className="font-medium">{tool.name}</div>
                                      <div className="text-xs text-gray-500">{tool.category}</div>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{tool.rating}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <span className={tool.freeVersion ? 'text-green-600' : 'text-gray-900'}>
                                    {tool.pricing}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <Badge variant="secondary" className="text-xs">
                                    {tool.speed}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {tool.freeVersion ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <X className="w-5 h-5 text-red-400" />
                                  )}
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => onNavigate('ai-tools', 'tool', tool.id)}
                                    >
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => handleToolSelect(tool.id)}
                                    >
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>

                    {/* Pros & Cons Comparison */}
                    <Card>
                      <CardHeader>
                        <h4 className="text-lg">Pros & Cons</h4>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                          {selectedToolsData.map((tool) => (
                            <div key={tool.id} className="space-y-4">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{tool.logo}</span>
                                <span className="font-medium">{tool.name}</span>
                              </div>
                              
                              <div className="space-y-3">
                                <div>
                                  <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                  <div className="space-y-1">
                                    {tool.pros.map((pro, idx) => (
                                      <div key={idx} className="flex items-start gap-2 text-sm">
                                        <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{pro}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                  <div className="space-y-1">
                                    {tool.cons.map((con, idx) => (
                                      <div key={idx} className="flex items-start gap-2 text-sm">
                                        <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>{con}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Advanced Comparison Button */}
                    <Card className="p-8 text-center">
                      <h4 className="text-lg mb-2">Want More Detailed Analysis?</h4>
                      <p className="text-gray-600 mb-6">
                        Get AI scorecards, performance metrics, and country-wise analysis
                      </p>
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                      >
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Advanced Comparison
                      </Button>
                    </Card>
                  </div>
                )}
              </TabsContent>